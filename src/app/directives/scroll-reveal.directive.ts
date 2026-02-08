import { Directive, ElementRef, OnInit, OnDestroy, Input, Optional } from '@angular/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';

/**
 * Directiva para animaciones de scroll reveal
 *
 * Puede usar un IntersectionObserver individual o uno compartido
 * vía ScrollAnimationService para mejor rendimiento
 *
 * @example
 * <div appScrollReveal animationClass="fade-in-up" [delay]="200">
 *   Contenido que se animará
 * </div>
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() animationClass: string = 'fade-in-up';
  @Input() delay: number = 0;
  @Input() useSharedObserver: boolean = true;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    @Optional() private scrollAnimationService?: ScrollAnimationService
  ) {}

  ngOnInit() {
    // Usar servicio compartido si está disponible y configurado
    if (this.useSharedObserver && this.scrollAnimationService) {
      this.scrollAnimationService.observe({
        element: this.el.nativeElement,
        animationClass: this.animationClass,
        delay: this.delay
      });
    } else {
      // Fallback: usar observer individual
      this.setupIndividualObserver();
    }
  }

  private setupIndividualObserver() {
    // Añadir clase inicial para ocultar el elemento
    this.el.nativeElement.classList.add('scroll-reveal-hidden');

    // Configurar el Intersection Observer
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.el.nativeElement.classList.add('scroll-reveal-visible', this.animationClass);
            this.el.nativeElement.classList.remove('scroll-reveal-hidden');
          }, this.delay);

          // Dejar de observar después de la primera animación
          this.observer!.unobserve(this.el.nativeElement);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.useSharedObserver && this.scrollAnimationService) {
      this.scrollAnimationService.unobserve(this.el.nativeElement);
    } else if (this.observer) {
      this.observer.disconnect();
    }
  }
}
