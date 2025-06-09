import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }

  readonly Sun = Sun;
  readonly Moon = Moon;
  isDarkMode = false;

  navItems = [
    { label: 'Inicio', fragment: 'hero' },
    { label: 'Proyectos', fragment: 'projects' },
    { label: 'Acerca', fragment: 'about' },
    { label: 'Habilidades', fragment: 'skills' },
    { label: 'Experiencia', fragment: 'experience' },
    { label: 'Contacto', fragment: 'contact' }
  ];

  constructor(private router: Router) { }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    console.log(`Dark mode is now ${this.isDarkMode ? 'enabled' : 'disabled'}`);
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
  }
}
