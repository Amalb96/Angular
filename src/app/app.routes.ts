import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from './Child-child Relation/parent/parent.component';

export const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home.module').then(m => m.HomeModule) },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'childchildrelation', component: ParentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home on empty path
];
