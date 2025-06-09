import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, X, Menu } from 'lucide-angular';
import { ThemeToggleComponent } from '../../../features/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, CommonModule, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  readonly X = X;
  readonly Menu = Menu;
  isOpen = false;
  scrolled = false;

  navItems = [
    { label: 'Inicio', fragment: 'hero' },
    { label: 'Experiencia', fragment: 'experience' },
    { label: 'Proyectos', fragment: 'projects' },
    { label: 'Habilidades', fragment: 'skills' },
    { label: 'Sobre mí', fragment: 'about' },
    { label: 'Contacto', fragment: 'contact' }
  ];

  constructor(private router: Router) { }

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  // Método para navegación con fragmentos
  navigateToSection(fragment: string) {
    // Navegar a la ruta raíz con el fragmento
    this.router.navigate(['/'], { fragment: fragment }).then(() => {
      // Scroll suave después de la navegación
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    });

    if (this.isOpen) {
      this.openMenu()
    }
  }
}
