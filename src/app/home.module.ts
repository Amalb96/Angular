import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: '',component: HomeComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeComponent,RouterModule.forChild(routes)],
  exports: [HomeComponent]
})
export class HomeModule { }
