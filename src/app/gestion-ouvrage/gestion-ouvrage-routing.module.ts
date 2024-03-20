import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../shared/services/auth.guard";
import { AddRayonComponent } from "./add-rayon/add-rayon.component";
import { ListeRayonComponent } from "./liste-rayon/liste-rayon.component";

@NgModule({
    imports: [
      RouterModule.forChild([

        {
          path: 'add-rayon',
          component: AddRayonComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'liste-rayon',
          component: ListeRayonComponent,
          canActivate: [AuthGuard]
        }
      ])
    ],
    exports: [
      RouterModule
    ]
  })

  export class GestionHopitalRoutingModule {
  }
