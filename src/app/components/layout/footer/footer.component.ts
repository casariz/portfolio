import { Component } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail, Send } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Send = Send;
  readonly Mail = Mail;
  listContact = [
    { icon: this.Github, link: 'https://www.github/casariz' },
    { icon: this.Linkedin, link: 'https://www.linkedin.com/in/daniel-felipe-casallas-ortiz/' },
    { icon: this.Send, link: 'https://t.me/casariz' },
    { icon: this.Mail, link: 'mailto:danielfelipedfco@gmail.com' }
  ];

  contactForm = {
    name: '',
    email: '',
    message: ''
  };
}
