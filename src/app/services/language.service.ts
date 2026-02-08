import { Injectable, signal, computed } from '@angular/core';

/**
 * Idiomas soportados
 */
export type Language = 'es' | 'en';

/**
 * Servicio de traducción e internacionalización
 * Maneja el cambio de idioma y almacena la preferencia en localStorage
 */
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'preferred-language';

  // Signal para el idioma actual
  private currentLanguage = signal<Language>(this.getInitialLanguage());

  // Computed signal para acceder al idioma actual
  language = computed(() => this.currentLanguage());

  constructor() {
    // Aplicar idioma inicial
    this.applyLanguage(this.currentLanguage());
  }

  /**
   * Obtiene el idioma inicial del localStorage o del navegador
   */
  private getInitialLanguage(): Language {
    // Intentar obtener del localStorage
    const stored = localStorage.getItem(this.STORAGE_KEY) as Language;
    if (stored && (stored === 'es' || stored === 'en')) {
      return stored;
    }

    // Detectar idioma del navegador
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
  }

  /**
   * Cambia el idioma actual
   */
  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.applyLanguage(lang);
  }

  /**
   * Alterna entre español e inglés
   */
  toggleLanguage(): void {
    const newLang = this.currentLanguage() === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }

  /**
   * Obtiene el idioma actual
   */
  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }

  /**
   * Verifica si el idioma actual es español
   */
  isSpanish(): boolean {
    return this.currentLanguage() === 'es';
  }

  /**
   * Verifica si el idioma actual es inglés
   */
  isEnglish(): boolean {
    return this.currentLanguage() === 'en';
  }

  /**
   * Aplica el idioma al documento (útil para atributos HTML)
   */
  private applyLanguage(lang: Language): void {
    document.documentElement.lang = lang;
  }
}
