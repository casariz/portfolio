import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../interfaces/skill';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-skill-card',
  imports: [LucideAngularModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() skills!: SkillCategory;
}
