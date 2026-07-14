/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Enable JSON bodies
app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;

function getAi(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in the Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Bo's Professional CV Data compiled as a reference text for the LLM
const BO_RESUME_TEXT = `
NAME: Bo Kosmak
TITLE: Digital Economy Student
EMAIL: kosmakbo086@gmail.com
PHONE: 070699611
LOCATION: Phnom Penh, Cambodia
WEBSITE: https://bo-kosmak.dev
TAGLINE: Driving analytical insights to solve real-world challenges in the digital economy.

BIO:
Bo Kosmak is a Digital Economics student with a strong foundation in economic principles, data analysis, and digital business trends. Skilled in critical thinking and adapting to fast-changing digital markets, with a keen interest in e-commerce, fintech, and data-driven decision-making. Eager to apply analytical skills to real-world business challenges.

WORK EXPERIENCE:
1. Digital Marketing Intern @ Tourism Service Assistant Agency (TSA) (June 2026 - Present)
   - Developing and executing digital marketing strategies to promote tourism services, analyzing campaign engagement metrics, and coordinating online outreach.
   - Managed and optimized social media advertising campaigns, increasing digital platform engagement and customer inquiries by 25%.
   - Conducted digital market research and SEO analysis to design and position competitive travel packages for international demographics.
   - Designed email marketing templates and digital promotional assets, streamlining client onboarding and customer relations.
   - Skills: Digital Marketing, Market Research, SEO & Analytics, Social Media Strategy, Cross Culture Communication.

2. General Assistant @ Khmer Design Group (November 2025 - February 2026)
   - Provided operational and administrative support, managing project databases, organizing agency budget reports, and assisting with design client presentations.
   - Audited and reorganized project billing ledger databases across 6 months of client engagements, reducing payment tracking discrepancies.
   - Prepared daily and monthly operational expense reports using Excel to support management cost auditing.
   - Facilitated team collaboration by organizing design assets and coordinating client schedules for major commercial pitches.
   - Skills: Operational Auditing, Budget Reports, Microsoft Office Advanced, Teamwork, Data Organization.

PROJECTS:
- Bakong CBDC Adoption Analysis: An econometric research study mapping local retail merchant engagement with the national digital currency. Uses Python (Pandas, Statsmodels), Excel VBA, Data Visualization, and Econometrics.
- Phnom Penh Food App Pricing Index: An automated web scraper and inflation tracking index monitoring digital grocery prices across food delivery platforms. Built with Python, BeautifulSoup, SQL, and Power BI.

EDUCATION:
- Bachelor of Science in Digital Economics, National University of Management, Phnom Penh (2025 - Present). GPA: 3.85 / 4.0. Focused on Econometrics, Fintech Innovation, Corporate Finance, and Digital Business Operations.
- High School, Pannasastra International School, Phnom Penh (2024 - 2025). Graduated with high honors.

CORE SKILLS:
- Microsoft Office Advanced: Advanced spreadsheets, Pivot Tables, VBA Macro Automation, Power BI.
- Critical Thinking: Qualitative/quantitative problem-solving, risk assessment, trend forecasting.
- Coding: Python (Pandas, NumPy), SQL Database Querying, R for Statistics, basic HTML/CSS/JS.
- Interpersonal: Cross Culture Communication, Khmer & English Fluency, Teamwork & Collaboration.
`;

// API Endpoint for Chat Assistant ("Ask Bo")
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages format. Must be an array of messages." });
  }

  try {
    const ai = getAi();
    
    // Map existing message history for the model
    // The @google/genai SDK chats system can take a structured message list or a custom prompt.
    // Let's build a single consolidated conversation log with a strong system instruction.
    const systemInstruction = `You are "Bo Kosmak", an incredibly skilled and personable Digital Economy Student. 
You are chatting with a visitor (recruiter, client, or developer) on your personal portfolio website. 
Answer their questions exactly as Bo. Be confident, warm, professional, articulate, and creative.
Base your responses on your real background, projects, and bio provided below. If asked about contact info, refer to kosmakbo086@gmail.com and phone number 070699611.
If asked about topics not directly covered by your resume, answer creatively in a way that aligns with your persona as a modern creative developer. Keep responses relatively concise, readable, and highly engaging.

BO KOSMAK RESUME REFERENCE:
${BO_RESUME_TEXT}
`;

    // Map message history to Gemini SDK parts
    const chatContents = messages.map((m: any) => ({
      role: m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: chatContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text || "I am here! How can I help you today?" });
  } catch (error: any) {
    console.error("Gemini API Error in /api/chat:", error);
    res.status(500).json({ 
      error: error.message || "An unexpected error occurred.",
      isKeyMissing: !process.env.GEMINI_API_KEY
    });
  }
});

// API Endpoint to generate custom cover letter tailored to a job post/description
app.post("/api/cover-letter", async (req, res) => {
  const { companyName, roleTitle, jobDescription, keyKeywords } = req.body;

  if (!companyName || !roleTitle) {
    return res.status(400).json({ error: "Company Name and Role Title are required." });
  }

  try {
    const ai = getAi();

    const systemInstruction = `You are a professional hiring consultant and CV writer working for Bo Kosmak. 
You will write an exceptionally elegant, persuasive, and tailored Cover Letter for Bo Kosmak applying for the role of "${roleTitle}" at "${companyName}".
Make it look like a highly polished letter. Emphasize Bo's real background in Creative Technology, React, Tailwind, full-stack Node/Express, and Google GenAI SDKs. 
Align his qualifications directly with the provided job description and highlight key focus keywords.
Keep the style modern, professional, sophisticated, and impactful. Output only the body of the cover letter in clean Markdown. Do not add any conversational meta-text before or after.`;

    const prompt = `
Write a custom cover letter.

Target Company: ${companyName}
Target Role: ${roleTitle}
Job Description Overview: ${jobDescription || "Not provided (focus on high-end creative engineering, full-stack React, and AI applications)"}
Specific Keywords to weave in: ${keyKeywords || "None specified"}

Bo's CV Reference:
${BO_RESUME_TEXT}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ coverLetter: response.text });
  } catch (error: any) {
    console.error("Gemini API Error in /api/cover-letter:", error);
    res.status(500).json({ 
      error: error.message || "An unexpected error occurred.",
      isKeyMissing: !process.env.GEMINI_API_KEY
    });
  }
});

// Vite Middleware Integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Portfolio CV server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
