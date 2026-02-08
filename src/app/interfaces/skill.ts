export interface Skill {
  name: string;
  icon: any; // Nombre del ícono simple-icons (ej: "angular")
}

export interface SkillCategory {
  title: string;
  icon: any; // LucideIcon
  color: string;
  skills: Skill[];
}
