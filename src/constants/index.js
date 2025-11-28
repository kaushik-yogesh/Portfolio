import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    icon: freelance,
    iconBg: "#0EA5E9",
    date: "2023 - Present",
    points: [
      "Built clean and responsive user interfaces using HTML, CSS, JavaScript, and React.js.",
      "Created reusable components, implemented routing, and managed state effectively.",
      "Integrated APIs, handled form validation, and added modern animations.",
      "Designed modern layouts with Tailwind CSS and ensured smooth user experience."
    ],
  },


  {
    title: "Backend Developer",
    company_name: "Self-employed",
    icon: backend,
    iconBg: "#4B5563",
    date: "2023 - Present",
    points: [
      "Developed RESTful APIs using Node.js and Express.js.",
      "Designed MongoDB schemas and performed CRUD operations.",
      "Implemented authentication, password hashing, and protected routes.",
      "Improved server performance using middleware and proper error handling."
    ],
  },


  {
    title: "Full-Stack MERN Developer",
    company_name: "Self-employed",
    icon: backend,
    iconBg: "#10B981",
    date: "2023 - Present",
    points: [
      "Built end-to-end MERN applications by combining frontend and backend workflows.",
      "Integrated MongoDB with backend controllers and data models.",
      "Developed secure authentication systems using JWT.",
      "Handled deployment for both frontend and backend on platforms like Vercel and Render."
    ],
  },




];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "MacBookPro-redesign",
  //   description:
  //     "A visually engaging website that showcases a redesigned MacBook Pro with smooth animations and a realistic 3D model, offering users an interactive and immersive way to explore the product’s look and features.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: macbookpro,
  //   source_code_link: "https://github.com/gitswastik08/macbook_landingpage",
  //   live_website_link: "https://macbookpro3d.netlify.app/",
  // },
  // {
  //   name: "Falverra Redesign",
  //   description:
  //     "A sleek and animated website redesign for Falverra, combining a clean layout with smooth transitions to deliver an engaging, modern browsing experience that highlights the brand’s visual identity and message.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "multi-page",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: falverra,
  //   source_code_link: "https://github.com/gitswastik08/falverra-redesign",
  //   live_website_link: "https://falverra-recode.netlify.app/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   // github link ⬇️
  //   source_code_link: "https://github.com/",
  //   // project link ⬇️
  //   live_website_link: "https://app.netlify.com/teams/gitswastik08/projects",
  // },
];

export { services, technologies, experiences, testimonials, projects };
