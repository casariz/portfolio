import { Translations } from './translations.interface';

export const EN_TRANSLATIONS: Translations = {
  nav: {
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m',
    title: 'Daniel Casallas',
    description: 'Junior backend developer passionate about creating robust and scalable solutions',
    viewProjects: 'View projects',
    contactMe: 'Contact',
  },
  about: {
    title: 'About',
    titleHighlight: 'me',
    paragraph1: 'I\'m Daniel Casallas, a junior backend developer with one year of experience in web application development. I specialize in server-side technologies, databases, and APIs, always focused on writing clean and efficient code.',
    paragraph2: 'I have a great passion for programming and how it evolves over time; one of my many desires is to be able to contribute in the future to open source projects that catch my attention and that I see have value for a significant audience. <3',
    tags: {
      backend: 'Backend Development',
      apis: 'REST APIs',
      databases: 'Databases',
    },
  },
  experience: {
    title: 'My',
    titleHighlight: 'experience',
    downloadCV: 'Download CV',
    downloadText: 'Download my CV in PDF format',
    positions: {
      fullstack: {
        title: 'Full Stack Development Intern',
        company: 'Vivero el Rosal S.A.S',
        location: 'Colombia',
        period: 'March 2024 - March 2025',
        descriptions: [
          'Development of platform to manage soccer tournaments held biannually at the company.',
          'Implementation and correction of already implemented modules in the Nursery CRM.',
          'Creation of web application for meeting and task management for the nursery association.',
          'Creation of mobile app with Ionic/Angular for managing per diems given to drivers.',
          'Use of company databases, table creation and normalization for the use of the aforementioned apps.',
        ],
      },
      student: {
        title: 'Systems and Computer Engineering Student',
        company: 'Universidad del Valle',
        location: 'Colombia',
        period: '2020 - Present',
        descriptions: [
          'Completed specialized courses in backend development and software architecture.',
          'Developed personal projects to practice database and API concepts.',
          'Learned about design patterns, clean code, and development best practices.',
          'Participated in developer communities and contributed to end-of-course projects.',
        ],
      },
    },
  },
  projects: {
    title: 'My',
    titleHighlight: 'projects',
    repository: 'Repository',
    frontend: 'Frontend',
    backend: 'Backend',
    demo: 'Demo',
    items: {
      svRosal: {
        title: 'SV - Rosal (Vehicle System)',
        description: 'Web and mobile application for per diem management, designed to facilitate route tracking, collection recording, expense and invoice registration for nursery drivers during their trips.',
      },
      pronunciapp: {
        title: 'PronunciAPP (Thesis)',
        description: 'Web application to provide feedback to English students, allowing users to evaluate their pronunciation through audio recordings. (Due to Azure VM costs, the backend is not publicly available, but the frontend version and backend source code can be accessed on GitHub.)',
      },
      asovalvi: {
        title: 'Asovalvi',
        description: 'Website for the Nursery Association in Valle del Cauca, designed to facilitate communication and event management among its members, as well as their tasks.',
      },
    },
  },
  skills: {
    title: 'My',
    titleHighlight: 'skills',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      learning: 'Learning',
      tools: 'Tools',
    },
  },
  contact: {
    title: 'Contact me',
    description: 'I\'m looking for opportunities as a junior backend developer where I can apply my knowledge and continue growing professionally. If you have an interesting project or job opportunity, don\'t hesitate to contact me.',
    whatsapp: 'Let\'s talk!',    email: 'Email',
    phone: 'Phone',
    location: 'Location',  },
  footer: {
    name: 'Daniel Casallas',
    title: 'Junior Backend Developer',
    madeWith: 'Made with',
    rights: '© 2025 Portfolio. All rights reserved.',
  },
};
