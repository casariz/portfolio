import { Component } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { CardExperienceComponent } from '../../components/cards/card-experience/card-experience.component';
import { LucideAngularModule, Download } from 'lucide-angular';
import { saveAs } from 'file-saver';
import { DownloadService } from '../../services/download.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CardExperienceComponent, LucideAngularModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  readonly downloadIcon = Download;

  experiences: Experience[] = [
    {
      title: "Practicante de desarrollo Full Stack",
      company: "Vivero el Rosal S.A.S",
      location: "Colombia",
      period: "Marzo 2024 - Marzo 2025",
      description: [
        "Desarrollo de platarforma para administrar torneos de futbol que se hacían semestralmente en la empresa.",
        "Implementación y corrección de módulos ya implementados en el CRM del Vivero.",
        "Creación de aplicación web para la gestión de reuniones y tareas para la asociación de viveristas.",
        "Creación de app móvil con Ionic/Angular para el manejo de viáticos dados a los conductores.",
        "Uso de bases de datos de la empresa, creación de tablas y normalización de las mismas para el uso de las apps anteriormente mencionadas.",
      ],
      skills: ["Angular", "Laravel", "MySQL", "Ionic", "Git"],
    },
    {
      title: "Estudiante de Ingeniería de Sistemas y Computación",
      company: "Univesidad del Valle",
      location: "Colombia",
      period: "2020 - Presente",
      description: [
        "Completé cursos especializados en desarrollo backend y arquitectura de software.",
        "Desarrollé proyectos personales para practicar conceptos de bases de datos y APIs.",
        "Aprendí sobre patrones de diseño, clean code y mejores prácticas de desarrollo.",
        "Participé en comunidades de desarrolladores y contribuí a proyectos de final de curso.",
      ],
      skills: ["JavaScript", "Python", "Git", "Docker", "Linux", "SQL", "NoSQL"],
    },
  ]

  constructor(private downloadSvc: DownloadService) { }

  downloadCV() {
    this.downloadSvc.downloadFile('/Daniel_Casallas_CV.pdf')
      .subscribe((blob: any) => saveAs(blob, 'Daniel_Casallas_CV.pdf'));
  }
}
