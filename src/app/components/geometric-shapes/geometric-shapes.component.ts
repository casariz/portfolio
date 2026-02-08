import { Component } from '@angular/core';

@Component({
  selector: 'app-geometric-shapes',
  standalone: true,
  template: `
    <div class="geometric-shapes-container">
      <!-- Formas geométricas decorativas -->
      <div class="geometric-shape shape-1"></div>
      <div class="geometric-shape shape-2"></div>
      <div class="geometric-shape shape-3"></div>
      <div class="geometric-shape shape-4"></div>
      <div class="geometric-shape shape-5"></div>
      <div class="geometric-shape shape-6"></div>
    </div>
  `,
  styleUrl: './geometric-shapes.component.css'
})
export class GeometricShapesComponent {}
