// All editable content lives in this file.

// ====== YOUR DETAILS ======
const NAME = 'Naina'; // your name (initials are generated automatically)
const EMAIL = 'naina7557777@gmail.com';
const GITHUB_USERNAME = 'naina7557777-source';
const LINKEDIN_URL = 'https://www.linkedin.com/in/naina-749bb8339';
// ==========================

const initials = NAME.split(' ')
  .filter(Boolean)
  .map((w) => w[0])
  .slice(0, 2)
  .join('')
  .toUpperCase();

export const profile = {
  name: NAME,
  initials,
  // 💡 EDITED: More impactful tagline combining Full-Stack and AI Engineering
  tagline: 'I build secure full stack web apps and explore Artificial Intelligence.',
  summary:
    'B.Tech CSE (Artificial Intelligence) student at University of Lucknow. Experienced in building responsive interfaces, secure Node.js backend architectures, and robust MongoDB collections.',
  availability: 'Open to Full-Stack & AI Internships',
  roles: ['Full Stack Developer', 'B.Tech AI Student', 'React Developer', 'Node.js Developer'],
  photo: '/profile.jpg', // file: public/profile.jpg (Apni photo is naam se public folder me save kar dena)
  resumeUrl: '/resume.pdf', // file: public/resume.pdf (Apna CV PDF is naam se public folder me daal dena)
  email: EMAIL,
  emailHref: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`,
  github: `https://github.com/${GITHUB_USERNAME}`,
  linkedin: LINKEDIN_URL,
  
  // 💡 EDITED: Added Lucknow University, Samsung Training, and Current Internship data inside your story
  about: [
    'Hi, I’m a passionate B.Tech CSE (Artificial Intelligence) student at the University of Lucknow. I specialize in developing complete full-stack web applications using the MERN stack while integrating structured logic, algorithmic workflows, and clean code optimization rules.',
    'My recent experience includes rigorous technical training in Coding & Programming from the Samsung Innovation Campus and hands-on production engineering as a Full-Stack Developer Intern at Future Interns. I love handling backend server allocations, resolving security boundary gaps like CORS, and crafting intuitive layouts that remain incredibly lightweight.',
  ],
  
  // The 5 small tiles around your photo in the hero section
  tiles: [
    { label: 'React', caption: 'Frontend' },
    { label: 'Node.js', caption: 'Backend' },
    { label: 'MongoDB', caption: 'Database' },
    { label: 'Python & AI', caption: 'Specialization' }, // 💡 EDITED: Replaced Git with AI specialization
    { label: 'Tailwind', caption: 'UI systems' },
  ],
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const skillGroups = [
  { title: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Tailwind CSS', 'Component Architecture'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'CORS Management'] },
  // 💡 EDITED: Included Python and AI/Data Structure training blocks inside skills
  { title: 'Data, AI & Tooling', items: ['Artificial Intelligence (AI)', 'Python / DSA', 'MongoDB', 'Git and GitHub', 'Postman'] },
];

// Leave `github` or `demo` as '' and that icon will not be shown on the card.
export const projects = [
  {
    id: 'mini-crm',
    title: 'Client Lead Management System (Task 2)',
    description:
      'A mini CRM to capture and manage client leads with status updates and notes, protected by admin login. Built with Node.js, Express and MongoDB.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: `https://github.com/${GITHUB_USERNAME}/FUTURE_FS_02`, // 💡 EDITED: Aligned repository name to rules
    demo: '', 
    image: null,
    accent: 'from-iris/70 to-lagoon/40',
  },
  {
    id: 'cafe-website',
    title: 'Cardamom & Crema Café Panel (Task 3)',
    description: 'A responsive cafe website with menu and group pricing sections, built with React and Tailwind CSS and connected to a Node.js and MongoDB backend.',
    tech: ['React.js', 'Tailwind CSS', 'Global Config', 'Axios Integration'],
    github: `https://github.com/${GITHUB_USERNAME}/FUTURE_FS_03`, // 💡 EDITED: Aligned repository name to rules
    demo: '', 
    image: null,
    accent: 'from-apricot/70 to-iris/40',
  },
  {
    id: 'portfolio',
    title: 'Personal Interactive Portfolio (Task 1)',
    description:
      'A responsive portfolio with a glassmorphism interface, project showcase, resume download and an EmailJS contact form.',
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'Glassmorphism Layout'],
    github: `https://github.com/${GITHUB_USERNAME}/FUTURE_FS_01`, // 💡 EDITED: Aligned repository name to rules
    demo: '', 
    image: null,
    accent: 'from-lagoon/70 to-apricot/40',
  },
];
