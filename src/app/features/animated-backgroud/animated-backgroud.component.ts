import { Component, ElementRef, ViewChild, OnInit, OnDestroy, HostListener, Inject, AfterViewInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-animated-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-backgroud.component.html',
  styleUrl: './animated-backgroud.component.css'
})
export class AnimatedBackgroudComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvasRef', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  isDarkTheme = false;
  scrollPosition = 0;
  currentTime = 0;
  isInteracting = false;
  mousePosition = { x: 0, y: 0 };
  private animationFrameId?: number;
  private stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
  private isCanvasReady = false;

  constructor(
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }

  ngAfterViewInit() {
    // Usar setTimeout para asegurar que el DOM esté listo
    setTimeout(() => {
      this.setupCanvas();
    }, 100);
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollPosition = window.pageYOffset;
  }  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mousePosition = { x: event.clientX, y: event.clientY };
    this.isInteracting = true;
  }

  private setupCanvas() {
    if (!this.canvasRef?.nativeElement) {
      console.error('Canvas element not found');
      return;
    }

    const canvas = this.canvasRef.nativeElement;
    
    // Configurar dimensiones
    this.resizeCanvas();
    
    // Test básico del canvas
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get 2D context');
      return;
    }    console.log('Canvas initialized:', canvas.width, 'x', canvas.height);
    
    this.isCanvasReady = true;
    this.initializeStars();
    this.startAnimation();
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    
    // Usar el tamaño del viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Asegurar que el canvas tenga el tamaño correcto en CSS
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    
    console.log('Canvas resized to:', canvas.width, 'x', canvas.height);
  }

  private initializeStars() {
    if (!this.isCanvasReady) return;
    
    const canvas = this.canvasRef.nativeElement;
    this.stars = []; // Limpiar estrellas existentes    // Detectar si es móvil y ajustar cantidad de estrellas
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 80 : 150; // Menos estrellas en móviles

    // Generar estrellas
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.8, // Estrellas un poco más pequeñas (0.8-3.3px)
        opacity: Math.random() * 0.8 + 0.4, // Más opacas (0.4-1.2)
        speed: Math.random() * 2 + 0.5 // Velocidad más rápida (0.5-2.5px/frame)
      });
    }
    
    console.log('Stars initialized:', this.stars.length, isMobile ? '(mobile)' : '(desktop)');
  }
  private startAnimation() {
    if (!this.isCanvasReady) return;
    
    const animate = (timestamp: number) => {
      this.currentTime = timestamp * 0.001;
      this.drawStars();
      this.animationFrameId = requestAnimationFrame(animate);
    };
    
    console.log('Animation started');
    this.animationFrameId = requestAnimationFrame(animate);
  }

  private drawStars() {
    if (!this.isCanvasReady) return;
    
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar estrellas
    this.stars.forEach((star, index) => {
      // Animar posición
      star.y += star.speed;
      
      // Reiniciar estrella cuando sale de la pantalla
      if (star.y > canvas.height + star.size) {
        star.y = -star.size;
        star.x = Math.random() * canvas.width;
      }      // Dibujar estrella
      ctx.save();
      ctx.globalAlpha = star.opacity;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = this.isDarkTheme 
        ? '#ffffff' 
        : '#64748b';
      ctx.fill();
      
      // Añadir un pequeño brillo
      ctx.globalAlpha = star.opacity * 0.3;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = this.isDarkTheme 
        ? '#ffffff' 
        : '#64748b';
      ctx.fill();
      
      ctx.restore();
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.isCanvasReady) {
      this.resizeCanvas();
      this.initializeStars(); // Reinicializar estrellas para nuevo tamaño
    }
  }
}
