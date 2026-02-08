import { Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { ANIMATION_CONFIG } from '../../../constants/styles.constants';

/**
 * Componente reutilizable para títulos de sección
 * Incluye animación de scroll reveal y estilo consistente con gradiente
 *
 * @example
 * <app-section-title
 *   beforeGradient="Mis"
 *   gradientText="proyectos">
 * </app-section-title>
 *
 * @example
 * <app-section-title
 *   gradientText="Contáctame">
 * </app-section-title>
 */
@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <h2
      class="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-16"
      appScrollReveal
      [animationClass]="animationClass">
      @if (beforeGradient) {
        {{ beforeGradient }}
      }
      <span class="gradient-title">{{ gradientText }}</span>
      @if (afterGradient) {
        {{ afterGradient }}
      }
    </h2>
  `,
  styles: []
})
export class SectionTitleComponent {
  /**
   * Texto antes del gradiente
   */
  @Input() beforeGradient = '';

  /**
   * Texto con gradiente (parte principal del título)
   */
  @Input() gradientText = '';

  /**
   * Texto después del gradiente
   */
  @Input() afterGradient = '';

  /**
   * Clase de animación a aplicar
   * @default 'fade-in-up'
   */
  @Input() animationClass = ANIMATION_CONFIG.classes.fadeInUp;
}
