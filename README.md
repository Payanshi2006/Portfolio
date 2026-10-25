# Payanshi Jain — Personal Portfolio Website

> **Production-ready, editorial personal portfolio website engineered for Software Engineer, Java Full-Stack Developer, and Full-Stack Developer roles.**

Built with **React 18**, **Vite**, and **Tailwind CSS**. Designed with an editorial aesthetic, refined typography, warm off-white background palettes, and a restrained dusty-rose accent complementing Payanshi's real professional photograph.

---

## 🌟 Key Highlights & Features

- **Editorial Aesthetic & Refined Typography**: Hand-crafted pairing of *Newsreader* (editorial serif for headings) and *Plus Jakarta Sans* (high-readability sans for UI/body), with *JetBrains Mono* for technical metrics and microservice topologies.
- **Flagship Project Deep-Dives**:
  - **NeuroForge Nexus Individual**: Distributed Java 17 + Spring Boot 3 microservices ecosystem (`user-service`, `cicd-service`), Spring Kafka event decoupling, Sprint Burndown & Velocity calculation endpoints, and Prometheus metrics.
  - **VendorMap**: Location-aware MERN marketplace utilizing MongoDB GeoJSON `2dsphere` spatial indexing, Smart Radius Expansion (5km → 20km → 50km), Haversine proximity calculations, and Mistral AI descriptions.
  - **Tavilyte**: Full-stack agentic AI chat workspace integrating LangGraph cyclic reasoning loops, Tavily real-time web search grounding, and Socket.IO bidirectional streaming.
  - **Event Registration & Ticketing System**: The commercial platform engineered during the Cynbit Technologies internship with JWT auth and RBAC.
  - **PlacePrep**: Institutional placement readiness SaaS in Java 25 + Spring Boot 3.5 + React 19 with live Vercel deployment.
- **Verified Assets & Real Credentials**:
  - Professional photograph (`public/assets/PayanshiPhoto.png`)
  - Official Resume PDF (`public/assets/PayanshiJainResume.pdf`)
  - Cynbit Technologies Internship Certificate (`public/assets/Cynbit_Certificate.jpg`)
  - Smart India Hackathon Certificate (`public/assets/SIH_CERTIFICATE.pdf`)
  - Zero Hour Summit / MUN Certificate (`public/assets/MUN_CERTIFICATE.pdf`)
- **Interactive Modals & Case Studies**: In-depth architecture modals detailing microservice port allocations, key technical decisions, problem/solution statements, and verified personal contributions.
- **Recruiter Usability**: One-click email copying, pre-filled mailto generation without opaque third-party dependencies, accessible mobile drawer navigation, and smooth anchor scrolling with sticky header offset guards.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 (Functional components & hooks) |
| **Bundler & Tooling** | Vite 5 (Hot Module Replacement, fast production build) |
| **Styling** | Tailwind CSS 3.4 (Custom warm & dusty-rose palette) |
| **Typography** | Newsreader (Display Serif) & Plus Jakarta Sans |
| **Icons** | Lucide React |
| **Micro-Interactions** | Canvas Confetti (celebratory resume download) |

---

## 🚀 Running Locally

### Prerequisites
- **Node.js**: v18+ or v22+
- **npm** or **pnpm**

### Installation & Development
```bash
# 1. Install dependencies
npm install

# 2. Start the local Vite development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

### Production Build & Preview
```bash
# Compile and optimize production bundle into /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account (`Payanshi2006`).
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. The site will be live within 60 seconds with SSL enabled.

### Deploy to Netlify
1. Log into [Netlify](https://netlify.com) and select **"Add new site" > "Import an existing project"**.
2. Connect your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **"Deploy site"**.

---

## 📁 Project Structure

```text
Portfolio/
├── public/
│   ├── assets/
│   │   ├── Cynbit_Certificate.jpg
│   │   ├── MUN_CERTIFICATE.pdf
│   │   ├── PayanshiJainResume.pdf
│   │   ├── PayanshiPhoto.png
│   │   ├── placeprep-architecture.png
│   │   └── SIH_CERTIFICATE.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header, scrollspy, accessible mobile drawer
│   │   ├── Hero.jsx            # Split layout, photo, proof points, resume confetti
│   │   ├── About.jsx           # Background, engineering approach, core pillars
│   │   ├── Skills.jsx          # Categorized skills, primary tech highlighting
│   │   ├── FeaturedProjects.jsx# Asymmetrical layout (lead, supporting, compact)
│   │   ├── ProjectModal.jsx    # Architectural deep-dive case-study dialog
│   │   ├── Experience.jsx      # Cynbit internship timeline & certificate modal
│   │   ├── Education.jsx       # JECRC (9.20 CGPA), Senior Secondary & Secondary
│   │   ├── Achievements.jsx    # SIH Top 23, Cognizant, MUN honors
│   │   ├── Certifications.jsx  # Juniper JNCIA, Copado AI, Google Cloud
│   │   ├── CodingProfiles.jsx  # GitHub, LeetCode, LinkedIn cards
│   │   ├── Contact.jsx         # Direct email copy, validated form, mailto fallback
│   │   └── Footer.jsx          # Monogram, quick links, back-to-top
│   ├── data/
│   │   └── portfolioData.js    # Verified factual data models
│   ├── App.jsx
│   ├── index.css               # Tailwind directives, custom scrollbars, typography
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📄 License & Attribution

Designed and engineered for **Payanshi Jain**. All project code, certificates, and academic credentials belong to their respective institutions and authors.
