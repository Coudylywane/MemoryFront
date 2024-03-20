import { NgModule } from '@angular/core';
//import { AjoutUserComponent } from './components/utilisateurs/ajout-user/ajout-user.component';
//import { ListUserComponent } from './components/utilisateurs/list-user/list-user.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
//import { StructureAddComponentComponent } from './components/structures/structure-add.component/structure-add.component.component';
//import { StructureListComponentComponent } from './components/structures/structure-list.component/structure-list.component.component';



@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
