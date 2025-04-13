import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.post('/generate', async (req, res) => {
    const { prompt } = req.body;
  
    let formattedPrompt;
  
    if (prompt.toLowerCase().includes("quote")) {
      formattedPrompt = `Give me a unique, original quote on the topic: ${prompt}`;
    } else if (prompt.toLowerCase().includes("story")) {
      formattedPrompt = `Write a detailed short story with a clear beginning, middle, and end. Be creative and make it engaging. ${prompt}`;
    } else {
      formattedPrompt = `Answer this creatively: ${prompt}`;
    }
  
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: formattedPrompt },
            { role: 'assistant', content: previousOutput },
            { role: 'user', content: 'Please continue the story.' }
          ],
          
        max_tokens: 1000,
        temperature: 0.9,
      });
  
      res.json({ output: completion.choices[0].message.content });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  });

  app.post("/continue", async (req, res) => {
    const { prompt, previous } = req.body;
  
    try {
      const continuation = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: prompt },
          { role: "assistant", content: previous },
          { role: "user", content: "Please continue the story." },
        ],
        max_tokens: 1000,
        temperature: 0.9,
      });
  
      res.json({ output: continuation.choices[0].message.content });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to continue story." });
    }
  });
  
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
