import { LucideIconData } from "lucide-angular";

export interface SkillCategory {
    title: string;
    icon: LucideIconData;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level: number
    color: string;
}