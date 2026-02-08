import { Component, computed, inject } from '@angular/core';
import { LucideAngularModule, Mail, Phone, MapPin, Send } from 'lucide-angular';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SectionTitleComponent } from '../../components/ui/section-title/section-title.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule, ScrollRevealDirective, SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly phoneIcon = Phone;
  readonly emailIcon = Mail;
  readonly addressIcon = MapPin;
  readonly sendIcon = Send;

  private translationService = inject(TranslationService);

  // Traducciones
  t = this.translationService.t;

  contactInfo = computed(() => [
    {
      name: this.t().contact.email,
      data: 'danielfelipedfco@gmail.com',
      icon: this.emailIcon,
      bgdiv: 'bg-indigo-100',
      bdicon: 'text-indigo-600',
      bgdivblack: 'dark:bg-purple-600/20',
      bgiconblack: 'dark:text-purple-300'
    },
    {
      name: this.t().contact.phone,
      data: '+57 (316) 047-6415',
      icon: this.phoneIcon,
      bgdiv: 'bg-purple-100',
      bdicon: 'text-purple-600',
      bgdivblack: 'dark:bg-blue-600/20',
      bgiconblack: 'dark:text-blue-300'
    },
    {
      name: this.t().contact.location,
      data: 'Valle del Cauca, Colombia',
      icon: this.addressIcon,
      bgdiv: 'bg-blue-100',
      bdicon: 'text-blue-600',
      bgdivblack: 'dark:bg-indigo-600/20',
      bgiconblack: 'dark:text-indigo-300'
    }
  ]);
}
