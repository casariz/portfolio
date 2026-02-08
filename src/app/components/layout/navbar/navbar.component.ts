import { CommonModule } from '@angular/common';
import { Component, HostListener, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, X, Menu } from 'lucide-angular';
import { ThemeToggleComponent } from '../../../features/theme-toggle/theme-toggle.component';
import { LanguageSelectorComponent } from '../../ui/language-selector/language-selector.component';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, CommonModule, ThemeToggleComponent, LanguageSelectorComponent],
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

  private translationService = inject(TranslationService);
  private router = inject(Router);

  // Computed para las traducciones
  t = this.translationService.t;

  // Computed para los items de navegación traducidos
  navItems = computed(() => [
    { label: this.t().nav.experience, fragment: 'experience' },
    { label: this.t().nav.projects, fragment: 'projects' },
    { label: this.t().nav.skills, fragment: 'skills' },
    { label: this.t().nav.about, fragment: 'about' },
    { label: this.t().nav.contact, fragment: 'contact' }
  ]);

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
