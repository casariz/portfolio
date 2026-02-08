import { SkillCategory } from '../interfaces/skill';
import { Code, Zap, Palette, GraduationCap, Wrench } from 'lucide-angular';

/**
 * Categorías de habilidades técnicas organizadas por área
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Angular", icon: "angular" },
      { name: "Vue.js", icon: "vuedotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    title: "Backend",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    title: "Mobile",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Kotlin", icon: "kotlin" },
      { name: "Android", icon: "android" },
      { name: "React Native", icon: "react" },
      { name: "Flutter", icon: "flutter" },
    ],
  },
  {
    title: "Learning",
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Go", icon: "go" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Rust", icon: "rust" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Three.js", icon: "threedotjs" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
      { name: "Vercel", icon: "vercel" },
      { name: "Firebase", icon: "firebase" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
];
