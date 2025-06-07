import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  languages = ['JavaSript', 'TypeScript', 'PHP', 'Python', 'Java'];
  libraries = ['Angular', 'Laravel', 'FastAPI', 'Bootstrap', 'Tailwind CSS'];
  databases = ['PostgreSQL', 'MySQL', 'MongoDB'];
  tools = ['Git', 'Docker', 'Kubernetes'];
  clouds = ['AWS', 'Azure', 'Google Cloud'];
  others = ['RESTful APIs', 'Metodologías ágiles', 'CI/CD'];
}
