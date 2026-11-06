# Personal Portfolio Website

A responsive, SEO-friendly personal portfolio built with React, Vite and Tailwind CSS, with a working contact form powered by EmailJS (no backend server needed).

**Live site:** https://YOUR-VERCEL-LINK.vercel.app

## Features

- Glassmorphism sticky navbar with a mobile hamburger menu and smooth scrolling
- Hero section with call-to-action buttons and resume download
- About section with skills
- Project cards with tech-stack badges and links to GitHub and live demos
- Contact form with client-side validation and email notifications via EmailJS
- Spam protection: honeypot field, minimum fill time and a 30-second cooldown between sends
- Semantic HTML (`header`, `main`, `section`, `footer`), meta tags, Open Graph tags and JSON-LD for SEO
- Fully responsive for mobile, tablet and desktop

## Tech stack

React 18, Vite, Tailwind CSS 3, EmailJS (`@emailjs/browser`)

## Getting started

```bash
git clone https://github.com/naina7557777-source/portfolio-website.git
cd portfolio-website
npm install
cp .env.example .env
npm run dev
```

On Windows Command Prompt use `copy .env.example .env` instead of `cp`. Then open http://localhost:5173.

## Environment variables

Create a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from your EmailJS dashboard. The `.env` file is git-ignored and must never be committed. Restart the dev server after changing it.

## EmailJS template

The contact form sends these variables: `{{from_name}}`, `{{from_email}}`, `{{reply_to}}`, `{{subject}}`, `{{message}}`.

## Customising

All content (name, bio, links, skills, projects) lives in `src/data/portfolio.js`. Replace `public/profile.jpg` and `public/resume.pdf` with your own files.

## Project structure

```
public/          profile.jpg, resume.pdf, favicon
src/
  components/    Navbar, Hero, About, Projects, ProjectCard, Contact, Footer, Icons, SectionHeading
  data/          portfolio.js (all editable content)
  hooks/         useScrollSpy, useTypewriter
  App.jsx
  index.css
  main.jsx
index.html       SEO meta tags and JSON-LD
```

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build in `dist/`
- `npm run preview` previews the production build locally

## Deployment

Deployed on Vercel. Add the three `VITE_EMAILJS_*` variables under Project Settings, Environment Variables, before deploying.

## Author

Naina · [GitHub](https://github.com/naina7557777-source) · [LinkedIn](https://www.linkedin.com/in/naina-749bb8339)
