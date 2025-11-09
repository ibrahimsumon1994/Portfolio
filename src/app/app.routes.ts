import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { Awards } from './components/awards/awards';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'experience', component: Experience },
  { path: 'education', component: Education },
  { path: 'projects', component: Projects },
  { path: 'awards', component: Awards },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
