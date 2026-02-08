import { GithubUrl } from '../interfaces/project';

/**
 * Utilidades para trabajar con proyectos
 */
export class ProjectUtils {
  /**
   * Verifica si la URL de GitHub es una cadena simple
   */
  static isSimpleGithubUrl(url: GithubUrl | undefined): url is string {
    return typeof url === 'string';
  }

  /**
   * Verifica si la URL de GitHub es un objeto con múltiples URLs
   */
  static isMultipleGithubUrl(
    url: GithubUrl | undefined
  ): url is { frontend?: string; backend?: string } {
    return typeof url === 'object' && url !== null;
  }

  /**
   * Extrae las URLs de GitHub de un proyecto de forma estructurada
   */
  static getGithubUrls(githubUrl: GithubUrl | undefined) {
    if (ProjectUtils.isSimpleGithubUrl(githubUrl)) {
      return { single: githubUrl };
    }
    if (ProjectUtils.isMultipleGithubUrl(githubUrl)) {
      return {
        frontend: githubUrl.frontend,
        backend: githubUrl.backend,
      };
    }
    return {};
  }
}
