import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio',
      description: 'Mi portafolio personal desarrollado con Angular.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
      link: ''},
    {
      title: 'PronunciAPP',
      description: 'Aplicación web para practicar pronunciación de inglés.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Python', 'FastAPI'],
      link: 'https://pronunciapp.me'
    },
    {
      title: 'SV - Rosal',
      description: 'App móvil - Gestor de viaticos dados a los conductores del Vivero el Rosal.',
      tech: ['Angular','Ionic', 'Laravel', 'PHP', 'MySQL'],
      link: ''
    },
    {
      title: 'En proceso de más...',
      description: '...',
      tech: ['Estaremos por verlo :3'],
      link: ''
    }
    // {
    //   title: 'Blog Personal',
    //   description: 'Blog personal para compartir mis pensamientos y proyectos.',
    //   tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    //   link: ''
    // },
    // {
    //   title: 'API RESTful',
    //   description: 'API RESTful para gestionar tareas, desarrollada con FastAPI.',
    //   tech: ['FastAPI', 'Python', 'PostgreSQL'],
    //   link: ''
    // }
    ]
}
