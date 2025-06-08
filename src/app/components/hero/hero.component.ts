import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';
import { LucideAngularModule, Github, Linkedin, Mail, Send, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  imports: [SkillsComponent, ProjectsComponent, AboutComponent, LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Send = Send;
  readonly Mail = Mail;
  readonly ChevronDown = ChevronDown;
  listContact = [
    { icon: this.Github, link: 'https://www.github/casariz' },
    { icon: this.Linkedin, link: 'https://www.linkedin.com/in/daniel-felipe-casallas-ortiz/' },
    { icon: this.Send, link: 'https://t.me/casariz' },
  ];
}
