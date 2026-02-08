import { Component, computed, inject } from '@angular/core';
import { Skill, SkillCategory } from '../../interfaces/skill';
import { LucideAngularModule } from 'lucide-angular';
import { SkillCardComponent } from '../../components/cards/skill-card/skill-card.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SKILL_CATEGORIES } from '../../data/skills.data';
import { SectionTitleComponent } from '../../components/ui/section-title/section-title.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent, LucideAngularModule, ScrollRevealDirective, SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  private translationService = inject(TranslationService);

  // Traducciones
  t = this.translationService.t;

  // Skills con categorías traducidas
  skills = computed((): SkillCategory[] => {
    const trans = this.t().skills.categories;
    const baseCategories = SKILL_CATEGORIES;

    return baseCategories.map((category, index) => ({
      ...category,
      title: index === 0 ? trans.frontend :
             index === 1 ? trans.backend :
             index === 2 ? trans.mobile :
             index === 3 ? trans.learning :
             index === 4 ? trans.tools :
             category.title
    }));
  });
}
