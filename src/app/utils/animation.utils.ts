/**
 * Utilidades para animaciones y efectos visuales
 */
export class AnimationUtils {
  /**
   * Calcula el delay escalonado para animaciones de listas
   * @param index Índice del elemento
   * @param baseDelay Delay base en milisegundos
   * @returns Delay total en milisegundos
   */
  static getStaggeredDelay(index: number, baseDelay: number = 100): number {
    return index * baseDelay;
  }

  /**
   * Aplica una animación de scroll suave a un elemento
   * @param elementId ID del elemento target
   */
  static smoothScrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  /**
   * Calcula el porcentaje de scroll de la página
   * @returns Porcentaje de scroll (0-100)
   */
  static getScrollPercentage(): number {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return (scrollTop / docHeight) * 100;
  }
}
