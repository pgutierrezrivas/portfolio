export interface Project {
    id: string;
    title: string;
    tags: string[];
    githubUrl?: string;
    figmaUrl?: string;
    demoUrl: string;
    image: string
}