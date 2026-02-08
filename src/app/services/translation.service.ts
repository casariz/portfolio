import { Injectable, computed } from '@angular/core';
import { LanguageService } from './language.service';
import { ES_TRANSLATIONS } from '../translations/es.translations';
import { EN_TRANSLATIONS } from '../translations/en.translations';
import { Translations } from '../translations/translations.interface';

/**
 * Servicio que proporciona acceso a las traducciones
 * basado en el idioma actual seleccionado
 */
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: Record<'es' | 'en', Translations> = {
    es: ES_TRANSLATIONS,
    en: EN_TRANSLATIONS,
  };

  // Computed signal que devuelve las traducciones para el idioma actual
  t = computed(() => {
    const lang = this.languageService.language();
    return this.translations[lang];
  });

  constructor(private languageService: LanguageService) {}

  /**
   * Obtiene las traducciones para el idioma actual
   */
  getTranslations(): Translations {
    return this.t();
  }

  /**
   * Obtiene una traducción específica por path
   * Ejemplo: get('hero.title') devuelve 'Daniel Casallas'
   */
  get(path: string): string {
    const keys = path.split('.');
    let value: any = this.t();

    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) break;
    }

    return value ?? path;
  }
}
