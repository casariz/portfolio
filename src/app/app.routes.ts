import { Routes } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HeroComponent},
    {path: '**', redirectTo: ''} 
];
