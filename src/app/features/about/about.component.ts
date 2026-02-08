import { Component, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SectionTitleComponent } from '../../components/ui/section-title/section-title.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective, SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private translationService = inject(TranslationService);

  t = this.translationService.t;
}
