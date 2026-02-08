/**
 * Estructura de las traducciones
 */
export interface Translations {
  nav: {
    experience: string;
    projects: string;
    skills: string;
    about: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    title: string;
    titleHighlight: string;
    paragraph1: string;
    paragraph2: string;
    tags: {
      backend: string;
      apis: string;
      databases: string;
    };
  };
  experience: {
    title: string;
    titleHighlight: string;
    downloadCV: string;
    downloadText: string;
    positions: {
      fullstack: {
        title: string;
        company: string;
        location: string;
        period: string;
        descriptions: string[];
      };
      student: {
        title: string;
        company: string;
        location: string;
        period: string;
        descriptions: string[];
      };
    };
  };
  projects: {
    title: string;
    titleHighlight: string;
    repository: string;
    frontend: string;
    backend: string;
    demo: string;
    items: {
      svRosal: {
        title: string;
        description: string;
      };
      pronunciapp: {
        title: string;
        description: string;
      };
      asovalvi: {
        title: string;
        description: string;
      };
    };
  };
  skills: {
    title: string;
    titleHighlight: string;
    categories: {
      frontend: string;
      backend: string;
      mobile: string;
      learning: string;
      tools: string;
    };
  };
  contact: {
    title: string;
    description: string;
    whatsapp: string;
    email: string;
    phone: string;
    location: string;
  };
  footer: {
    name: string;
    title: string;
    madeWith: string;
    rights: string;
  };
}
