import { Component, computed, inject } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { CardExperienceComponent } from '../../components/cards/card-experience/card-experience.component';
import { LucideAngularModule, Download } from 'lucide-angular';
import { saveAs } from 'file-saver';
import { DownloadService } from '../../services/download.service';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SectionTitleComponent } from '../../components/ui/section-title/section-title.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-experience',
  imports: [CardExperienceComponent, LucideAngularModule, CommonModule, ScrollRevealDirective, SectionTitleComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  readonly downloadIcon = Download;

  private downloadSvc = inject(DownloadService);
  private translationService = inject(TranslationService);

  // Traducciones
  t = this.translationService.t;

  // Experiences traducidas dinámicamente
  experiences = computed((): Experience[] => {
    const trans = this.t().experience.positions;
    return [
      {
        title: trans.fullstack.title,
        company: trans.fullstack.company,
        location: trans.fullstack.location,
        period: trans.fullstack.period,
        description: trans.fullstack.descriptions,
        skills: ["Angular", "Laravel", "MySQL", "Ionic", "Git"],
      },
      {
        title: trans.student.title,
        company: trans.student.company,
        location: trans.student.location,
        period: trans.student.period,
        description: trans.student.descriptions,
        skills: ["JavaScript", "Python", "Git", "Docker", "Linux", "SQL", "NoSQL"],
      },
    ];
  });

  downloadCV() {
    this.downloadSvc.downloadFile('/Daniel_Casallas_CV.pdf')
      .subscribe((blob: any) => saveAs(blob, 'Daniel_Casallas_CV.pdf'));
  }
}
