import { Component, Input } from '@angular/core';
import { Experience } from '../../../interfaces/experience';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Calendar } from 'lucide-angular';


@Component({
  selector: 'app-card-experience',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.css'
})
export class CardExperienceComponent {
  readonly mapPin = MapPin;
  readonly calendar = Calendar;

  @Input() experience!: Experience;
  @Input() index!: number;
}
