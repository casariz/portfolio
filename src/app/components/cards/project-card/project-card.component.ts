import { Component, Input, HostListener, ElementRef, inject } from '@angular/core';
import { Project } from '../../../interfaces/project';
import { LucideAngularModule, Github, ExternalLink } from 'lucide-angular';
import { ProjectUtils } from '../../../utils/project.utils';
import { TranslationService } from '../../../services/translation.service';

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

  private translationService = inject(TranslationService);
  private el = inject(ElementRef);

  // Traducciones
  t = this.translationService.t;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const card = this.el.nativeElement.querySelector('.project-card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const card = this.el.nativeElement.querySelector('.project-card');
    if (!card) return;

    card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
  }

  isSimpleGithubUrl(): boolean {
    return ProjectUtils.isSimpleGithubUrl(this.project.githubUrl);
  }

  isMultipleGithubUrl(): boolean {
    return ProjectUtils.isMultipleGithubUrl(this.project.githubUrl);
  }

  get frontendUrl(): string | undefined {
    const urls = ProjectUtils.getGithubUrls(this.project.githubUrl);
    return urls.frontend;
  }

  get backendUrl(): string | undefined {
    const urls = ProjectUtils.getGithubUrls(this.project.githubUrl);
    return urls.backend;
  }
}
