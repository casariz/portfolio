import { Component } from '@angular/core';
import { Skill, SkillCategory } from '../../interfaces/skill';
import { LucideAngularModule, Code, Zap, Database, Settings, Cloud, Users } from 'lucide-angular';
import { SkillCardComponent } from '../../components/cards/skill-card/skill-card.component';


@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent, LucideAngularModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly Code = Code;
  readonly Zap = Zap;
  readonly Database = Database;
  readonly Settings = Settings;
  readonly Cloud = Cloud;
  readonly Users = Users;
  skills: SkillCategory[] = [
    {
      title: "Lenguajes de Programación",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "TypeScript", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "PHP", level: 75, color: "from-purple-600 to-indigo-600" },
        { name: "Python", level: 70, color: "from-green-500 to-blue-500" },
        { name: "Java", level: 65, color: "from-red-500 to-orange-600" },
      ],
    },
    {
      title: "Frameworks & Librerías",
      icon: Zap,
      skills: [
        { name: "Angular", level: 80, color: "from-red-600 to-pink-600" },
        { name: "Laravel", level: 75, color: "from-red-500 to-orange-500" },
        { name: "FastAPI", level: 70, color: "from-teal-500 to-green-500" },
        { name: "Bootstrap", level: 85, color: "from-purple-500 to-indigo-500" },
        { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500" },
      ],
    },
    {
      title: "Bases de Datos",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 75, color: "from-blue-600 to-indigo-600" },
        { name: "MySQL", level: 80, color: "from-orange-500 to-yellow-500" },
        { name: "MongoDB", level: 70, color: "from-green-600 to-green-700" },
      ],
    },
    {
      title: "Herramientas & DevOps",
      icon: Settings,
      skills: [
        { name: "Git", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 70, color: "from-blue-400 to-cyan-500" },
        { name: "Kubernetes", level: 60, color: "from-blue-500 to-purple-500" },
        { name: "CI/CD", level: 65, color: "from-indigo-500 to-purple-500" },
      ],
    },
    {
      title: "Plataformas Cloud",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 65, color: "from-orange-400 to-yellow-500" },
        { name: "Azure", level: 60, color: "from-blue-500 to-indigo-500" },
        { name: "Google Cloud", level: 55, color: "from-red-500 to-yellow-500" },
      ],
    },
    {
      title: "Metodologías & Otros",
      icon: Users,
      skills: [
        { name: "RESTful APIs", level: 85, color: "from-green-500 to-teal-500" },
        { name: "Metodologías Ágiles", level: 75, color: "from-purple-500 to-pink-500" },
      ],
    },
  ];
}
