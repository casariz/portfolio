import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';
import { LucideAngularModule, Languages } from 'lucide-angular';

/**
 * Componente selector de idioma
 * Permite cambiar entre español e inglés
 */
@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button
      (click)="toggleLanguage()"
      class="flex items-center gap-2 px-3 py-2 rounded-lg
             text-slate-600 dark:text-gray-300
             hover:bg-emerald-100 dark:hover:bg-teal-600/20
             hover:text-emerald-600 dark:hover:text-teal-300
             transition-all duration-200"
      [title]="currentLanguage() === 'es' ? 'Switch to English' : 'Cambiar a Español'">
      <lucide-angular
        [img]="languagesIcon"
        class="w-5 h-5">
      </lucide-angular>
      <span class="text-sm font-medium uppercase">
        {{ currentLanguage() === 'es' ? 'EN' : 'ES' }}
      </span>
    </button>
  `,
  styles: [`
    button {
      position: relative;
    }

    button:active {
      transform: scale(0.95);
    }
  `]
})
export class LanguageSelectorComponent {
  readonly languagesIcon = Languages;
  private languageService = inject(LanguageService);

  currentLanguage = this.languageService.language;

  constructor() {
    // Log para debugging cuando cambia el idioma
    effect(() => {
      console.log('Language changed to:', this.currentLanguage());
    });
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
