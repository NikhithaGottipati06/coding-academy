# Coding Academy Backend

This is a simple Node.js/Express backend that proxies requests to Google Generative AI API. Users don't need API keys — they just use the chatbot and the backend handles authentication.

## Setup

1. **Get a Google API Key** (free):
   - Go to [google.ai.dev](https://google.ai.dev)
   - Click "Get API Key"
   - Copy the key

2. **Deploy to Render (Free)**:
   - Create account at [render.com](https://render.com)
   - Create new "Web Service"
   - Connect your GitHub repo (`coding-academy-site`)
   - Set environment variables:
     - `GOOGLE_API_KEY` = your Google key (paste here, not in code)
   - Deploy ✅
   - Copy your service URL (e.g., `https://coding-academy-backend.onrender.com`)

3. **Update Frontend**:
   - In `index.html`, replace `callGoogleAI()` backend endpoint with your Render URL
   - Change: `https://generativelanguage.googleapis.com/...` 
   - To: `https://your-service.onrender.com/chat`

4. **Test**:
   - Chatbot now works without user keys!
   - Backend handles authentication securely

## Local Testing

```bash
npm install
# Create .env file with: GOOGLE_API_KEY=your_key
npm run dev
# Server runs on http://localhost:3000
# Test: POST http://localhost:3000/chat with {"message": "What is Python?"}
```

## How It Works

```
User asks question in chatbot
         ↓
Frontend sends to: https://your-service.onrender.com/chat
         ↓
Backend receives request
         ↓
Backend adds hidden API key + system instruction
         ↓
Backend calls Google Gemini API
         ↓
Backend returns response to frontend
         ↓
User sees AI answer (no keys exposed!)
```

## Security

✅ API key is **never exposed** to frontend  
✅ Users can't see or steal the key  
✅ Only your backend can call the Google API  
✅ Completely free tier!

---

**Questions?** Check Render docs: [render.com/docs](https://render.com/docs)
