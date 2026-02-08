import { Component, computed, inject } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ProjectCardComponent } from '../../components/cards/project-card/project-card.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SectionTitleComponent } from '../../components/ui/section-title/section-title.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, ScrollRevealDirective, SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private translationService = inject(TranslationService);

  // Traducciones
  t = this.translationService.t;

  // Projects traducidos dinámicamente
  projects = computed((): Project[] => {
    const trans = this.t().projects.items;
    return [
      {
        title: trans.svRosal.title,
        description: trans.svRosal.description,
        image: 'svrosal.jpg',
        technologies: ['Angular', 'TypeScript', 'CSS', 'Ionic', 'Laravel', 'MySQL'],
        githubUrl: {
          frontend: 'https://github.com/casariz/SV-Frontend',
          backend: 'https://github.com/casariz/SV-Backend'
        },
        liveUrl: ''
      },
      {
        title: trans.pronunciapp.title,
        description: trans.pronunciapp.description,
        image: 'PronunciAPP.png',
        technologies: ['Angular', 'TypeScript', 'CSS', 'FastAPI', 'Azure VM'],
        githubUrl: {
          frontend: 'https://github.com/casariz/frontend-pronunciAPP',
          backend: 'https://github.com/casariz/VALL-E-X'
        },
        liveUrl: 'https://pronunciapp.me'
      },
      {
        title: trans.asovalvi.title,
        description: trans.asovalvi.description,
        image: 'asovalvi.png',
        technologies: ['Angular', 'TypeScript', 'CSS', 'Laravel', 'MySQL'],
        githubUrl: {
          frontend: 'https://github.com/casariz/asociacion-viveros',
          backend: 'https://github.com/casariz/asovalvi'
        },
        liveUrl: ''
      },
    ];
  });
}
