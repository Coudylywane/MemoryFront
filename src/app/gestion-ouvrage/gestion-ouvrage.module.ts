import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeRayonComponent } from './liste-rayon/liste-rayon.component';
import { AddRayonComponent } from './add-rayon/add-rayon.component';
import { SharedModule } from '../shared/shared.module';
import { bootstrapApplication } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ListeRayonComponent,
    AddRayonComponent
  ],
  imports: [
    SharedModule,
   GestionOuvrageModule
  ]
})
export class GestionOuvrageModule { }
