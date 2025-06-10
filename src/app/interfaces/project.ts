export interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    githubUrl?: string | { frontend?: string; backend?: string }
    liveUrl?: string
}
