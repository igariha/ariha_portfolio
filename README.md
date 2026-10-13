# Ariha Jain — Personal Portfolio Website

A clean, modern personal portfolio website built with **React**, **Vite**, and **Plain CSS** featuring a dark engineering and robotics aesthetic (graphite black background `#0b0d11`, crisp white typography, and vibrant safety orange accents).

Designed specifically for **Ariha Jain**, first-year B.Tech Mechanical Engineering student at **JECRC University**.

---

## 🚀 Quick Start (Run Locally)

### 1. Install Dependencies
Open PowerShell or your terminal in the project folder and run:
```bash
npm install
```
*(On Windows PowerShell if scripts are restricted, you can use `npm.cmd install`)*

### 2. Start the Development Server
```bash
npm run dev
```
*(Or `npm.cmd run dev`)*

The terminal will display the local preview URL, typically:
```
http://localhost:3000/
```
Open that URL in your browser to view the live website.

---

## 🛠️ Build for Production & Vercel Deployment

### Build the Project
```bash
npm run build
```
This generates an optimized, minified production build in the `dist/` directory.

### Deploying to Vercel
1. Push this folder to your GitHub account: `https://github.com/igariha/portfolio` (or your chosen repository name).
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **Add New Project** and import the repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Vercel will build and assign you a free public domain (e.g., `ariha-portfolio.vercel.app`).

---

## 📁 Project Structure

```
c:\arihaportfolio\
├── public/
│   ├── favicon.svg          # Custom engineering gear/robotics favicon
│   └── resume.pdf           # (Place your PDF here once ready)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed header with mobile drawer & brand badge
│   │   ├── Hero.jsx         # Hero section with animated engineering schematic visual
│   │   ├── About.jsx        # Bio, core values, focus areas & hobbies
│   │   ├── Education.jsx    # Clean vertical timeline
│   │   ├── Skills.jsx       # Technical skills vs. areas of interest
│   │   ├── Projects.jsx     # Cards for Arduino OLED Pet, Bionic Butterfly, etc.
│   │   ├── Achievements.jsx # Hackathon & technical workshops
│   │   ├── Contact.jsx      # Social profiles, direct email & message form
│   │   ├── ChatbotModal.jsx # Floating "Ask Ariha" Botpress teaser widget
│   │   ├── ResumeModal.jsx  # Resume status dialog
│   │   └── Footer.jsx       # Footer with quick links & back-to-top
│   ├── data/
│   │   └── portfolioData.js # Centralized data configuration (all info editable here)
│   ├── styles/
│   │   ├── index.css        # Global CSS variables, reset, blueprint grid
│   │   └── *.css            # Component-specific plain CSS modules
│   ├── App.jsx              # Application assembler
│   └── main.jsx             # React entrypoint
├── index.html               # Page title, meta tags, Google Fonts
├── package.json
└── vite.config.js
```

---

## ✏️ How to Customize Your Content

All personal details, projects, education entries, and social links are centralized in:
👉 `src/data/portfolioData.js`

### 1. Activating Your Resume
1. Place your resume PDF file into the `public/` folder and name it `resume.pdf`.
2. Open `src/data/portfolioData.js`.
3. Set `resumeAvailable: true`:
   ```javascript
   personal: {
     ...
     resumeAvailable: true,
     resumeUrl: "/resume.pdf"
   }
   ```
4. Now whenever visitors click **"Download Resume"** or **"Resume"**, your PDF will be downloaded instantly!

### 2. Updating Projects & Statuses
In `src/data/portfolioData.js`, each project in the `projects` array has a `status` and `statusType` field. You can adjust them as your prototypes evolve:
```javascript
{
  id: "oled-virtual-pet",
  title: "Arduino OLED Virtual Pet",
  status: "In Progress / Prototyping",
  statusType: "in-progress", // 'in-progress' | 'prototype' | 'concept' | 'complete'
  ...
}
```

### 3. Integrating Botpress ("Ask Ariha") Later
When you configure your Botpress bot:
1. In `index.html`, add your Botpress webchat script before `</body>`.
2. Or replace the placeholder modal in `src/components/ChatbotModal.jsx` with the Botpress webchat trigger.

---

## 📄 License
MIT License. Created for Ariha Jain.
