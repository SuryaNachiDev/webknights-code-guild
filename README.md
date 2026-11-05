# WebKnights Code Guild

Website for WebKnights, a free four-week summer program where high school students teach kids to build websites with HTML, CSS and JavaScript. The site covers the program schedule, the weekly curriculum, how to join or start a chapter, and an AI assistant that answers visitor questions.

## Stack

- React, TypeScript and Vite
- Tailwind CSS with shadcn/ui components
- Groq API for the chatbot

## Run it

```
npm install
npm run dev
```

The chatbot reads its key from `VITE_GROQ_API_KEY` in a local `.env` file. Vite embeds any `VITE_` variable in the built JavaScript, so anyone can read that key from a deployed build. Before deploying, move the Groq call behind a small server or serverless function that holds the key.
