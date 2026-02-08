import { Component, Input, OnInit, Type, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import {
  SiHtml5Icon,
  SiCssIcon,
  SiJavascriptIcon,
  SiReactIcon,
  SiAngularIcon,
  SiVueDotJsIcon,
  SiTailwindCssIcon,
  SiBootstrapIcon,
  SiTypescriptIcon,
  SiNodeDotJsIcon,
  SiPythonIcon,
  SiExpressIcon,
  SiMongodbIcon,
  SiPostgresqlIcon,
  SiGraphqlIcon,
  SiKotlinIcon,
  SiAndroidIcon,
  SiFlutterIcon,
  SiGoIcon,
  SiKubernetesIcon,
  SiRustIcon,
  SiThreeDotJsIcon,
  SiGitIcon,
  SiDockerIcon,
  SiLinuxIcon,
  SiVercelIcon,
  SiFirebaseIcon,
  SiSupabaseIcon
} from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-simple-icon',
  standalone: true,
  template: `<ng-container #iconContainer></ng-container>`,
  styles: [`:host { display: inline-flex; align-items: center; justify-content: center; }`]
})
export class SimpleIconComponent implements OnInit {
  @Input() name!: string;
  @Input() class: string = 'w-6 h-6';
  @ViewChild('iconContainer', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  private iconMap: { [key: string]: Type<any> } = {
    'html5': SiHtml5Icon,
    'css3': SiCssIcon,
    'css': SiCssIcon,
    'javascript': SiJavascriptIcon,
    'react': SiReactIcon,
    'angular': SiAngularIcon,
    'vuedotjs': SiVueDotJsIcon,
    'vue-dot-js': SiVueDotJsIcon,
    'tailwindcss': SiTailwindCssIcon,
    'bootstrap': SiBootstrapIcon,
    'typescript': SiTypescriptIcon,
    'nodedotjs': SiNodeDotJsIcon,
    'nodejs': SiNodeDotJsIcon,
    'python': SiPythonIcon,
    'express': SiExpressIcon,
    'mongodb': SiMongodbIcon,
    'postgresql': SiPostgresqlIcon,
    'graphql': SiGraphqlIcon,
    'kotlin': SiKotlinIcon,
    'android': SiAndroidIcon,
    'flutter': SiFlutterIcon,
    'go': SiGoIcon,
    'kubernetes': SiKubernetesIcon,
    'rust': SiRustIcon,
    'threedotjs': SiThreeDotJsIcon,
    'three-dot-js': SiThreeDotJsIcon,
    'git': SiGitIcon,
    'docker': SiDockerIcon,
    'linux': SiLinuxIcon,
    'vercel': SiVercelIcon,
    'firebase': SiFirebaseIcon,
    'supabase': SiSupabaseIcon
  };

  ngOnInit() {
    this.loadIcon();
  }

  private loadIcon() {
    const normalizedName = this.name.toLowerCase();
    const IconComponent = this.iconMap[normalizedName];

    if (IconComponent) {
      this.container.clear();
      const componentRef: ComponentRef<any> = this.container.createComponent(IconComponent);

      // Aplicar clases CSS al elemento SVG
      const element = componentRef.location.nativeElement;
      if (element) {
        const classes = this.class.split(' ');
        classes.forEach(cls => {
          if (cls) {
            element.classList.add(cls);
          }
        });
      }
    } else {
      console.warn(`Icon not found: ${this.name}`);
    }
  }
}
