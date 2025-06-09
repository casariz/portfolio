import { Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/project';
import { LucideAngularModule, Github, ExternalLink } from 'lucide-angular';

@Component({
  selector: 'app-project-card',
  imports: [LucideAngularModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  readonly githubIcon = Github;
  readonly externalLinkIcon = ExternalLink;
  
  @Input() project!: Project;
}
