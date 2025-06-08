import { Component, Input } from '@angular/core';
import { Experience } from '../../../interfaces/experience';

@Component({
  selector: 'app-card-experience',
  imports: [],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.css'
})
export class CardExperienceComponent {
  @Input() experience!: Experience;
}
