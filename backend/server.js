const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GOOGLE_API_KEY;

app.use(cors());
app.use(express.json());

// ═══════════════════════ SHARED USER STATS ═══════════════════════
// In-memory store for all users' public stats (persisted to file when possible)
const STATS_FILE = path.join(__dirname, 'user-stats.json');
let allUserStats = {};

// Load stats from file on startup
try {
  if (fs.existsSync(STATS_FILE)) {
    allUserStats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
    console.log(`[Stats] Loaded ${Object.keys(allUserStats).length} users from file`);
  }
} catch (e) { console.warn('[Stats] Could not load stats file:', e.message); }

function persistStats() {
  try { fs.writeFileSync(STATS_FILE, JSON.stringify(allUserStats, null, 2)); }
  catch (e) { /* Ephemeral filesystem on some hosts — stats stay in memory */ }
}

// Save/update a single user's public stats
app.post('/stats', (req, res) => {
  const { name, xp, level, streak, quizScore, badges, conceptPct, lastActive } = req.body;
  if (!name) return res.status(400).json({ error: 'name is required' });
  allUserStats[name] = {
    name,
    xp: xp || 0,
    level: level || 1,
    streak: streak || 0,
    quizScore: quizScore || '0/45',
    badges: badges || 0,
    conceptPct: conceptPct || 0,
    lastActive: lastActive || new Date().toISOString()
  };
  persistStats();
  res.json({ ok: true, totalUsers: Object.keys(allUserStats).length });
});

// Get all users' public stats
app.get('/stats', (req, res) => {
  const statsList = Object.values(allUserStats).sort((a, b) => (b.xp || 0) - (a.xp || 0));
  res.json({ users: statsList });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running!', totalUsers: Object.keys(allUserStats).length });
});

// Main chat endpoint - accepts user message and returns AI response
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!API_KEY) {
      return res.status(500).json({ error: 'API key not configured on server' });
    }

    // Call Google Generative AI API
    const googleResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        systemInstruction: {
          parts: [{
            text: 'You are an expert coding educational assistant. Answer all programming questions comprehensively. Cover Python, JavaScript, SQL, Go, C++, Java, algorithms, data structures, debugging, web development, databases, and interview prep. Provide clear explanations with code examples and practical use cases. Be detailed and thorough in your responses.'
          }]
        },
        contents: [{
          parts: [{
            text: message
          }]
        }],
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7
        }
      }
    );

    const aiResponse = googleResponse.data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiResponse) {
      return res.status(500).json({ error: 'No response from Google API' });
    }

    res.json({ response: aiResponse });

  } catch (error) {
    console.error('Error:', error.message);
    const apiError = error.response?.data?.error?.message || error.message;
    res.status(500).json({ error: `Failed to get AI response: ${apiError}` });
  }
});

app.listen(PORT, () => {
  console.log(`Coding Academy Backend running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
