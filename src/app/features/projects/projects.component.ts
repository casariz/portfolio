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
      title: 'SV - Rosal (Sistema vehicular)',
      description: 'Aplicación web y móvil para la gestión de viaticos, diseñada para facilitar el seguimiento de rutas, registro de recaudos, registro de gastos y facturaciones que tenian los conductores del vivero al momento de realizar sus viajes.',
      image: 'svrosal.jpg',
      technologies: ['Angular', 'TypeScript', 'CSS', 'Ionic', 'Laravel', 'MySQL'],
      githubUrl: {
        frontend: 'https://github.com/casariz/SV-Frontend',
        backend: 'https://github.com/casariz/SV-Backend'
      },
      liveUrl: ''
    },
    {
      title: 'PronunciAPP (Tesis)',
      description: 'Aplicativo web para dar feedback a estudiantes de inglés, permitiendo a los usuarios evaluar su pronunciación mediante grabaciones de audio. (Debido a los costes de la VM de Azure, el backend no está disponible públicamente, pero se puede acceder a la versión frontend y al código fuente del backend en GitHub.)',
      image: 'PronunciAPP.png',
      technologies: ['Angular', 'TypeScript', 'CSS', 'FastAPI', 'Azure VM'],
      githubUrl: {
        frontend: 'https://github.com/casariz/frontend-pronunciAPP',
        backend: 'https://github.com/casariz/VALL-E-X'
      },
      liveUrl: 'https://pronunciapp.me'
    },
    {
      title: 'Asovalvi',
      description: 'Web para la Asociación de Viveros en el Valle del Cauca, diseñada para facilitar la comunicación y gestión de eventos entre sus miembros, así como las tareas de los mismos.',
      image: 'asovalvi.png',
      technologies: ['Angular', 'TypeScript', 'CSS', 'Laravel', 'MySQL'],
      githubUrl: {
        frontend: 'https://github.com/casariz/asociacion-viveros',
        backend: 'https://github.com/casariz/asovalvi'
      },
      liveUrl: ''
    },
  ]
}
