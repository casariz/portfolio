/**
 * Constantes generales de la aplicación
 */
export const APP_CONFIG = {
  /**
   * Información personal
   */
  personal: {
    name: 'Daniel Casallas',
    username: '@casariz',
    title: 'Desarrollador Backend Junior',
    description: 'Desarrollador backend junior apasionado por crear soluciones robustas y escalables',
  },

  /**
   * Enlaces de redes sociales
   */
  social: {
    github: 'https://www.github.com/casariz',
    linkedin: 'https://www.linkedin.com/in/daniel-felipe-casallas-ortiz/',
    telegram: 'https://t.me/casariz',
    whatsapp: 'https://wa.me/573160476415',
    email: 'danielfelipedfco@gmail.com',
  },

  /**
   * Ubicación
   */
  location: {
    country: 'Colombia',
    city: 'Cali',
  },

  /**
   * IDs de secciones para navegación
   */
  sections: {
    hero: 'hero',
    about: 'about',
    experience: 'experience',
    projects: 'projects',
    skills: 'skills',
    contact: 'contact',
  },
} as const;

/**
 * Constantes de archivos y recursos
 */
export const RESOURCES = {
  cv: {
    path: '/Daniel_Casallas_CV.pdf',
    filename: 'Daniel_Casallas_CV.pdf',
  },
} as const;
