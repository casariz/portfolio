import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { SimpleIconComponent } from '../../simple-icon/simple-icon.component';
import { SkillCategory } from '../../../interfaces/skill';

@Component({
  selector: 'app-skill-card',
  imports: [LucideAngularModule, SimpleIconComponent],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() skills!: SkillCategory;
}
