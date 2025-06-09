import { Component } from '@angular/core';
import { LucideAngularModule, Mail, Phone, MapPin, Send } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly phoneIcon = Phone;
  readonly emailIcon = Mail;
  readonly addressIcon = MapPin;
  readonly sendIcon = Send;

  contactInfo = [
    {
      name: 'Email',
      data: 'danielfelipedfco@gmail.com',
      icon: this.emailIcon,
      bgdiv: 'bg-indigo-100',
      bdicon: 'text-indigo-600',
      bgdivblack: 'dark:bg-purple-600/20',
      bgiconblack: 'dark:text-purple-300'
    },
    {
      name: 'Teléfono',
      data: '+57 (316) 047-6415',
      icon: this.phoneIcon,
      bgdiv: 'bg-purple-100',
      bdicon: 'text-purple-600',
      bgdivblack: 'dark:bg-blue-600/20',
      bgiconblack: 'dark:text-blue-300'
    },
    {
      name: 'Ubicación',
      data: 'Valle del Cauca, Colombia',
      icon: this.addressIcon,
      bgdiv: 'bg-blue-100',
      bdicon: 'text-blue-600',
      bgdivblack: 'dark:bg-indigo-600/20',
      bgiconblack: 'dark:text-indigo-300'
    }
  ]
}
