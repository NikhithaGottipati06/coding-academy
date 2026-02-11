const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GOOGLE_API_KEY;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running! 🚀' });
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
  console.log(`🚀 Coding Academy Backend running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
