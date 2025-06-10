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
  isSimpleGithubUrl(): boolean {
    return typeof this.project.githubUrl === 'string';
  }

  isMultipleGithubUrl(): boolean {
    return typeof this.project.githubUrl === 'object' && this.project.githubUrl !== null;
  }

  get frontendUrl(): string | undefined {
    if (this.isMultipleGithubUrl()) {
      return (this.project.githubUrl as { frontend?: string; backend?: string }).frontend;
    }
    return undefined;
  }

  get backendUrl(): string | undefined {
    if (this.isMultipleGithubUrl()) {
      return (this.project.githubUrl as { frontend?: string; backend?: string }).backend;
    }
    return undefined;
  }
}
