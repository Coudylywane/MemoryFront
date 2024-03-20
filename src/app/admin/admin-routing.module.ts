import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../shared/services/auth.guard";
// import { StructureAddComponentComponent } from "./components/structures/structure-add.component/structure-add.component.component";
// import { StructureListComponentComponent } from "./components/structures/structure-list.component/structure-list.component.component";
// import { AjoutUserComponent } from "./components/utilisateurs/ajout-user/ajout-user.component";
// import { ListUserComponent } from "./components/utilisateurs/list-user/list-user.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      // {
      //   path: 'ajoutUser',
      //   component: AjoutUserComponent,
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'listUser',
      //   component: ListUserComponent,
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'addStructure',
      //   component: StructureAddComponentComponent,
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'listStructure',
      //   component: StructureListComponentComponent,
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'structure-edit/:structureId',
      //   component: StructureAddComponentComponent,
      //   canActivate: [AuthGuard]
      // }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {}
