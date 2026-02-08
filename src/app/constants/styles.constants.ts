/**
 * Constantes de estilos y tema del portfolio
 */
export const THEME_COLORS = {
  /**
   * Gradientes principales del tema
   */
  gradient: {
    primary: 'from-emerald-600 via-teal-600 to-cyan-600',
    primaryDark: 'dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400',
    button: 'from-emerald-600 via-teal-600 to-cyan-600',
    buttonDark: 'dark:from-teal-600 dark:via-cyan-600 dark:to-emerald-600',
  },

  /**
   * Colores para cards y componentes
   */
  card: {
    base: 'bg-white/80 dark:bg-slate-800/50',
    border: 'border-slate-200/50 dark:border-slate-700/50',
    hover: 'hover:border-emerald-200 dark:hover:border-teal-700/50',
  },

  /**
   * Colores para tags y badges
   */
  tag: {
    primary: 'bg-emerald-100 dark:bg-teal-600/20 text-emerald-700 dark:text-teal-300',
    secondary: 'bg-teal-100 dark:bg-cyan-600/20 text-teal-700 dark:text-cyan-300',
    tertiary: 'bg-cyan-100 dark:bg-emerald-600/20 text-cyan-700 dark:text-emerald-300',
  },

  /**
   * Colores de iconos
   */
  icon: {
    container: 'bg-emerald-100 dark:bg-teal-600/20',
    color: 'text-emerald-600 dark:text-teal-400',
  },
} as const;

/**
 * Constantes para animaciones
 */
export const ANIMATION_CONFIG = {
  /**
   * Delays para animaciones escalonadas (en ms)
   */
  delays: {
    short: 100,
    medium: 200,
    long: 400,
  },

  /**
   * Duraciones de transiciones (en segundos)
   */
  durations: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },

  /**
   * Clases de animación disponibles
   */
  classes: {
    fadeInUp: 'fade-in-up',
    fadeInLeft: 'fade-in-left',
    fadeInRight: 'fade-in-right',
    scaleIn: 'scale-in',
  },
} as const;

/**
 * Configuraciones de Intersection Observer
 */
export const SCROLL_OBSERVER_CONFIG = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
} as const;
