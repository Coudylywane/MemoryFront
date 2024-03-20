import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeRayonComponent } from './liste-rayon/liste-rayon.component';
import { AddRayonComponent } from './add-rayon/add-rayon.component';
import { SharedModule } from '../shared/shared.module';
import { BlockUIModule } from 'ng-block-ui';
import { config } from '../app.config.server';
import { bootstrapApplication } from '@angular/platform-browser';

const declarations = () => bootstrapApplication(ListeRayonComponent, config);

  export default declarations;

@NgModule({
  declarations: [
   // ListeRayonComponent,
    //AddRayonComponent
  ],
  imports: [
    //CommonModule,
    SharedModule,
    BlockUIModule.forRoot(),
   // GestionOuvrageModule
  ]
})
export class GestionOuvrageModule { }
