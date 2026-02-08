export type GithubUrl = string | { frontend?: string; backend?: string };

export interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    githubUrl?: GithubUrl
    liveUrl?: string
}
