import { Injectable } from '@angular/core';
import { SCROLL_OBSERVER_CONFIG } from '../constants/styles.constants';

/**
 * Configuración para elementos animados
 */
export interface ScrollAnimationConfig {
  element: HTMLElement;
  animationClass: string;
  delay: number;
  onIntersect?: () => void;
}

/**
 * Servicio centralizado para manejar animaciones de scroll
 * Usa un único IntersectionObserver para todos los elementos,
 * mejorando el rendimiento comparado con múltiples observers
 */
@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer: IntersectionObserver;
  private animationConfigs = new Map<HTMLElement, ScrollAnimationConfig>();

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      SCROLL_OBSERVER_CONFIG
    );
  }

  /**
   * Registra un elemento para animación de scroll
   */
  observe(config: ScrollAnimationConfig): void {
    const { element, animationClass, delay } = config;

    // Añadir clase inicial para ocultar el elemento
    element.classList.add('scroll-reveal-hidden');

    // Guardar configuración
    this.animationConfigs.set(element, config);

    // Observar elemento
    this.observer.observe(element);
  }

  /**
   * Deja de observar un elemento
   */
  unobserve(element: HTMLElement): void {
    this.observer.unobserve(element);
    this.animationConfigs.delete(element);
  }

  /**
   * Maneja la intersección de elementos
   */
  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const config = this.animationConfigs.get(entry.target as HTMLElement);

        if (config) {
          setTimeout(() => {
            config.element.classList.add('scroll-reveal-visible', config.animationClass);
            config.element.classList.remove('scroll-reveal-hidden');

            // Ejecutar callback opcional
            if (config.onIntersect) {
              config.onIntersect();
            }
          }, config.delay);

          // Dejar de observar después de la animación
          this.unobserve(config.element);
        }
      }
    });
  }

  /**
   * Limpia todos los observers (útil en ngOnDestroy)
   */
  destroy(): void {
    this.observer.disconnect();
    this.animationConfigs.clear();
  }
}
