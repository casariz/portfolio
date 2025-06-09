import { Component } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { CardExperienceComponent } from '../../components/cards/card-experience/card-experience.component';

@Component({
  selector: 'app-experience',
  imports: [CardExperienceComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      title: "Desarrollador Backend Junior",
      company: "Proyecto Personal / Freelance",
      location: "Colombia",
      period: "2024 - Presente (6 meses)",
      description: [
        "Desarrollo de APIs REST utilizando Node.js y Express.js para aplicaciones web.",
        "Implementación de bases de datos MongoDB y PostgreSQL con esquemas optimizados.",
        "Creación de sistemas de autenticación y autorización seguros con JWT.",
        "Integración de servicios externos y APIs de terceros para funcionalidades avanzadas.",
      ],
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT"],
    },
    {
      title: "Estudiante de Desarrollo Backend",
      company: "Aprendizaje Autodidacta",
      location: "Colombia",
      period: "2023 - 2024",
      description: [
        "Completé cursos especializados en desarrollo backend y arquitectura de software.",
        "Desarrollé proyectos personales para practicar conceptos de bases de datos y APIs.",
        "Aprendí sobre patrones de diseño, clean code y mejores prácticas de desarrollo.",
        "Participé en comunidades de desarrolladores y contribuí a proyectos open source.",
      ],
      skills: ["JavaScript", "Python", "Git", "Docker", "Linux"],
    },
  ]
}
