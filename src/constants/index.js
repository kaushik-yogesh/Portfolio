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
  {
    name: "My Portfolio",
    description:
      "A visually engaging website that showcases a redesigned MacBook Pro with smooth animations and a realistic 3D model, offering users an interactive and immersive way to explore the product’s look and features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Metrial UI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/kaushik-yogesh/",
    live_website_link: "https://portfolio-alpha-woad-602j3s0pu3.vercel.app/",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A visually engaging website that showcases a redesigned MacBook Pro with smooth animations and a realistic 3D model, offering users an interactive and immersive way to explore the product’s look and features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Metrial UI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/kaushik-yogesh/",
    live_website_link: "https://poojatrendhub.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
