import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ProjectCardComponent } from '../../components/cards/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio Personal',
      description: 'Un portafolio personal para mostrar mis proyectos y habilidades.',
      image: 'assets/images/portfolio.png',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      githubUrl: 'github.com/tuusuario/portfolio',
      liveUrl: 'https://tuusuario.github.io/portfolio'
    },
  ]
}
