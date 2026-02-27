<div align="center">
  <br />
    <a href="https://youtu.be/JiwTGGGIhDs" target="_blank">
      <img src="public/readme/readme-hero.webp" alt="Project Banner">
    </a>
  <br />

  <div>
<img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
<img src="https://img.shields.io/badge/-Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white" />
<img src="https://img.shields.io/badge/-Tailwind-06B6D4?style=for-the-badge&logo=Tailwind-CSS&logoColor=white" />
<img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" />
<img src="https://img.shields.io/badge/-Puter-A855F7?style=for-the-badge&logo=Puter&logoColor=white" /><br/>
<img src="https://img.shields.io/badge/-Claude-D97757?style=for-the-badge&logo=Anthropic&logoColor=white" />
<img src="https://img.shields.io/badge/-Gemini-4285F4?style=for-the-badge&logo=Google-Gemini&logoColor=white" />
<img src="https://img.shields.io/badge/-CodeRabbit-FF6600?style=for-the-badge&logo=CodeRabbit&logoColor=white" />

  </div>

  <h3 align="center">Vista AI | AI-powered Architectural Visualization App</h3>

   <div align="center">
     Forked from <a href="https://github.com/adrianhajdin/roomify" target="_blank"><b>Roomify</b></a> by adrianhajdin. Extended with new features by <b>Muhammad Hamid Ali Khalid</b>.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Introduction](#introduction)
2. 🆕 [New Features](#new-features)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🔋 [Features](#features)
5. 🤸 [Quick Start](#quick-start)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## ✨ <a name="introduction">Introduction</a>

AI-powered architectural visualization SaaS built with React, TypeScript, and Puter. Use AI models from Claude to Gemini to transform 2D floor plans into photorealistic 3D renders with permanent hosting and persistent metadata. This project features 2D-to-3D photorealistic rendering, serverless workers, high-performance KV storage, and a global community feed.

## 🆕 <a name="new-features">New Features</a>

> Extended by **Muhammad Hamid Ali Khalid**

### 🎨 Room Style Presets
Choose from 6 curated design styles — **Modern**, **Minimalist**, **Industrial**, **Scandinavian**, **Japandi**, and **Luxury** — each with a unique set of AI-enhancing keywords. Selecting a preset automatically enriches the AI prompt with style-specific vocabulary so the generated render matches your design intent. A purple-glowing selection state and inline hint message confirm the preset is active. Clear the selection at any time.

### 🌙 Dark / Light Mode Toggle
A smooth animated toggle button in the navbar switches the entire app between a deep **dark mode** (charcoal + purple) and a clean **light mode**. The chosen theme persists across sessions via `localStorage` under the key `vista-theme` and is applied instantly using CSS custom properties on `document.documentElement`. The toggle thumb slides left/right with a CSS transition and shows a moon 🌙 or sun ☀️ emoji.

### 📐 Room Dimension Calculator
A collapsible panel (triggered by a **📐 Room Calculator** button) lets users enter room dimensions before generating. Supports **Imperial (ft)** and **Metric (m)** unit modes. Enter **Length**, **Width**, and **Ceiling Height**, and see live calculations for:
- Floor Area
- Wall Area
- Flooring Needed (floor area × 1.1 for 10% waste)
- Perimeter

Click **✦ Add dimensions to AI prompt** to append a formatted dimension summary to the render prompt, giving the AI spatial context for a more accurate visualization.

## <a name="tech-stack">⚙️ Tech Stack</a>
- **[React](https://react.dev/)** is a popular JavaScript library for building user interfaces, specifically for creating single-page applications with a component-based architecture.

- **[Vite](https://vitejs.dev/)** is a next-generation frontend tool that provides an extremely fast development environment and optimized build process for modern web projects.

- **[TypeScript](https://www.typescriptlang.org/)** is a strongly typed superset of JavaScript that adds static types, helping developers catch errors early and write more maintainable code.

- **[TailwindCSS](https://tailwindcss.com/)** is a utility-first CSS framework that allows for rapid UI development by applying pre-defined classes directly in your markup.

- **[Puter](https://jsm.dev/roomify-puter)** is the underlying cloud computing platform and "Internet OS" that provides the infrastructure; including serverless Workers, permanent file storage, key-value (KV) databases, and hosted AI models.

- **[Puter.js](https://jsm.dev/roomify-puterjs)** is the official JavaScript SDK that allows developers to interact with those cloud services directly from the frontend.

- **[CodeRabbit](https://jsm.dev/roomify-coderabbit)** is an AI-powered code review platform that provides deep insights and automated suggestions to improve code quality and security.

- **[Claude](https://www.anthropic.com/claude)** and **[Gemini](https://deepmind.google/technologies/gemini/)** are state-of-the-art large language models used to power the architectural transformation and image generation logic within the application.


## <a name="features">🔋 Features</a>
👉 **2D-to-3D Visualization**: Instant architectural rendering that transforms flat floor plans into photorealistic 3D models using state-of-the-art AI.

👉 **Persistent Media Hosting**: Permanent file storage that generates public URLs for every upload and output, ensuring your renders are always accessible.

👉 **Dynamic Project Gallery**: A personalized workspace that tracks your history of visualizations with instant loading and metadata persistence.

👉 **Side-by-Side Comparison**: Interactive tools designed to visualize the direct transformation from a source architectural sketch to its AI-rendered counterpart.

👉 **Global Community Feed**: A public discovery engine where users share their architectural projects with the world in a single click.

👉 **Privacy Controls**: Granular public and private toggles that give users full authority over the visibility and security of their architectural data.

👉 **Ownership Mapping**: A clean metadata system that tracks project details and user IDs across the entire platform for seamless account management.

👉 **Modern Export Functionality**: High-performance tools to download and move AI-generated renders into real-world presentations and workflows.

And many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/roomify
cd roomify
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_PUTER_WORKER_URL=""
```

Replace the placeholder values with your real credentials. You can get these by signing up at: [**Puter.com**](https://jsm.dev/roomify-puter).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="links">🔗 Assets</a>

Assets and snippets used in the project can be found in the **[video kit](https://jsmastery.com/video-kit/ee3ef6c2-95f4-4992-a3ea-5edd4ac3ca7c)**.

<a href="https://jsmastery.com/video-kit/ee3ef6c2-95f4-4992-a3ea-5edd4ac3ca7c" target="_blank">
  <img src="public/readme/readme-videokit.webp" alt="Video Kit Banner">
</a>

## <a name="more">🚀 More</a>

**Advance your skills with Next.js Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with
detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsm.dev/roomify-jsm" target="_blank">
  <img src="public/readme/readme-jsmpro.webp" alt="Project Banner">
</a>
