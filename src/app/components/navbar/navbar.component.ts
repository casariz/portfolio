import { CommonModule } from '@angular/common';
import { Component, Host, HostListener } from '@angular/core';
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
    { label: 'Inicio', link: '/' },
    { label: 'Acerca', link: '/about' },
    { label: 'Habilidades', link: '/skills' },
    { label: 'Experiencia', link: '/experience' },
    { label: 'Proyectos', link: '/projects' },
    { label: 'Contacto', link: '/contact' }
  ];

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    console.log(`Dark mode is now ${this.isDarkMode ? 'enabled' : 'disabled'}`);
  }
}
