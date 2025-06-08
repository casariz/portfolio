import { Component } from '@angular/core';
import { Experience } from '../../interfaces/experience';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Tech Solutions',
      location: 'San Francisco, CA',
      period: 'Jan 2020 - Present',
      description: ['Angular', 'Node.js', 'TypeScript'],
      skills: ['Angular', 'Node.js', 'TypeScript']
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Agency',
      location: 'New York, NY',
      period: 'Jun 2018 - Dec 2019',
      description: ['Angular', 'Node.js', 'TypeScript'],
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
  ]
}
