# AI Prompt Generator

The AI Prompt Generator is a web-based application that enables users to submit custom prompts and receive AI-generated responses. These responses can take the form of motivational quotes, short stories, or general creative text, depending on the input provided. The application is powered by OpenAI’s GPT-3.5 Turbo model and is designed to demonstrate the integration of emerging AI technologies into modern web development.

---

## Overview

This project focuses on the practical implementation of an emerging trend in web development—artificial intelligence-driven content generation. The goal is to enhance user interaction by enabling real-time, tailored responses to user prompts using OpenAI’s API. The application also includes a feature that allows users to continue stories that were cut off due to token limitations, thus simulating a conversational or sequential interaction with the AI.

---

## Features

- Users can input custom prompts to request original quotes, short stories, or other creative content.
- The application uses conditional logic to identify the nature of the request (e.g., quote or story) and format the AI prompt accordingly.
- A "Continue the Story" feature allows users to extend responses that were cut off.
- Responsive user interface with a minimalist design, based on a structured wireframe layout.

---

## Technologies Used

The technologies used in this project include HTML, CSS, and JavaScript for the frontend; Node.js and Express.js for the backend; the OpenAI GPT-3.5 Turbo model for API integration; and dotenv for secure environment variable management.

---

## Project Structure

The project is organized into the following structure:

- A root directory containing the primary server file (`server.js`), the environment configuration file (`.env`), and the `package.json` configuration file.
- A `public` folder that holds all frontend assets, including the `index.html`, `style.css`, and `script.js` files.
- All routes and API logic are handled within the `server.js` file, while frontend interactions and styling are defined in the corresponding files within the `public` directory.

---

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository from GitHub and navigate into the project directory.
2. Install all necessary dependencies using Node Package Manager.
3. Create a `.env` file at the root level and insert your OpenAI API key using the variable `OPENAI_API_KEY`.
4. Start the server using the `npm start` command.
5. Open your web browser and go to `http://localhost:5000` to access the application interface.

Once running, you can submit prompts and view the AI-generated responses. If a story is incomplete, you can use the "Continue the Story" button to request a continuation from the AI.

---

## How It Works

When a user submits a prompt, the frontend sends a POST request to the `/generate` endpoint on the server. The server analyzes the nature of the request and constructs a tailored prompt to send to OpenAI’s GPT-3.5 model. The resulting AI-generated response is sent back to the frontend and displayed to the user.

If the initial response appears to be cut off or incomplete, the user can click the "Continue" button. This triggers a second POST request to the `/continue` endpoint, which includes both the original prompt and the prior AI response. The backend sends these messages to OpenAI as a continuing conversation, prompting it to generate a natural follow-up to the previous content.

---

## Rationale for Technology Choice

Artificial intelligence continues to reshape web development by introducing dynamic and personalized content capabilities. This project was designed to explore the integration of OpenAI’s language model into a traditional web application using lightweight and widely adopted tools. By combining a responsive frontend with real-time backend interaction, the project demonstrates how emerging technologies can enhance user experience and open new possibilities for content generation.

---

## Potential Future Enhancements

The following features could be added in future versions of this project:

- Integration of local or cloud-based data storage to allow users to save their generated content.
- A selection menu for users to choose between content types (e.g., quote, story, general).
- User authentication and session management for personalized interactions.
- Deployment of the backend using services like Render and the frontend using Vercel or GitHub Pages to make the application publicly accessible.

---
