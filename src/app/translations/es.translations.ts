import { Translations } from './translations.interface';

export const ES_TRANSLATIONS: Translations = {
  nav: {
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades',
    about: 'Sobre mí',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    title: 'Daniel Casallas',
    description: 'Desarrollador backend junior apasionado por crear soluciones robustas y escalables',
    viewProjects: 'Ver proyectos',
    contactMe: 'Contactar',
  },
  about: {
    title: 'Sobre',
    titleHighlight: 'mí',
    paragraph1: 'Soy Daniel Casallas, un desarrollador backend junior con un año de experiencia en el desarrollo de aplicaciones web. Me especializo en tecnologías del lado del servidor, bases de datos y APIs, siempre enfocado en escribir código limpio y eficiente.',
    paragraph2: 'Tengo una gran pasión por la programación y el cómo va evolucionando con el paso del tiempo; siendo uno de mis tantos deseos el poder llegar a contribuir en un futuro a proyectos open source que me llamen la atención y que vea que tiene un valor para un público significativo. <3',
    tags: {
      backend: 'Desarrollo Backend',
      apis: 'APIs REST',
      databases: 'Bases de datos',
    },
  },
  experience: {
    title: 'Mi',
    titleHighlight: 'experiencia',
    downloadCV: 'Descargar CV',
    downloadText: 'Descarga mi CV en formato PDF',
    positions: {
      fullstack: {
        title: 'Practicante de desarrollo Full Stack',
        company: 'Vivero el Rosal S.A.S',
        location: 'Colombia',
        period: 'Marzo 2024 - Marzo 2025',
        descriptions: [
          'Desarrollo de platarforma para administrar torneos de futbol que se hacían semestralmente en la empresa.',
          'Implementación y corrección de módulos ya implementados en el CRM del Vivero.',
          'Creación de aplicación web para la gestión de reuniones y tareas para la asociación de viveristas.',
          'Creación de app móvil con Ionic/Angular para el manejo de viáticos dados a los conductores.',
          'Uso de bases de datos de la empresa, creación de tablas y normalización de las mismas para el uso de las apps anteriormente mencionadas.',
        ],
      },
      student: {
        title: 'Estudiante de Ingeniería de Sistemas y Computación',
        company: 'Universidad del Valle',
        location: 'Colombia',
        period: '2020 - Presente',
        descriptions: [
          'Completé cursos especializados en desarrollo backend y arquitectura de software.',
          'Desarrollé proyectos personales para practicar conceptos de bases de datos y APIs.',
          'Aprendí sobre patrones de diseño, clean code y mejores prácticas de desarrollo.',
          'Participé en comunidades de desarrolladores y contribuí a proyectos de final de curso.',
        ],
      },
    },
  },
  projects: {
    title: 'Mis',
    titleHighlight: 'proyectos',
    repository: 'Repositorio',
    frontend: 'Frontend',
    backend: 'Backend',
    demo: 'Demo',
    items: {
      svRosal: {
        title: 'SV - Rosal (Sistema vehicular)',
        description: 'Aplicación web y móvil para la gestión de viaticos, diseñada para facilitar el seguimiento de rutas, registro de recaudos, registro de gastos y facturaciones que tenian los conductores del vivero al momento de realizar sus viajes.',
      },
      pronunciapp: {
        title: 'PronunciAPP (Tesis)',
        description: 'Aplicativo web para dar feedback a estudiantes de inglés, permitiendo a los usuarios evaluar su pronunciación mediante grabaciones de audio. (Debido a los costes de la VM de Azure, el backend no está disponible públicamente, pero se puede acceder a la versión frontend y al código fuente del backend en GitHub.)',
      },
      asovalvi: {
        title: 'Asovalvi',
        description: 'Web para la Asociación de Viveros en el Valle del Cauca, diseñada para facilitar la comunicación y gestión de eventos entre sus miembros, así como las tareas de los mismos.',
      },
    },
  },
  skills: {
    title: 'Mis',
    titleHighlight: 'habilidades',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      learning: 'Aprendiendo',
      tools: 'Herramientas',
    },
  },
  contact: {
    title: 'Contáctame',
    description: 'Estoy buscando oportunidades como desarrollador backend junior donde pueda aplicar mis conocimientos y seguir creciendo profesionalmente. Si tienes un proyecto interesante o una oportunidad laboral, no dudes en contactarme.',
    whatsapp: '¡Hablemos!',
    email: 'Email',
    phone: 'Teléfono',
    location: 'Ubicación',
  },
  footer: {
    name: 'Daniel Casallas',
    title: 'Desarrollador Backend Junior',
    madeWith: 'Hecho con',
    rights: '© 2025 Portfolio. Todos los derechos reservados.',
  },
};
