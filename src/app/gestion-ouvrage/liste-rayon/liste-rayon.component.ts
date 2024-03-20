import { Component, Inject, InjectionToken, LOCALE_ID, OnDestroy, OnInit, Optional } from '@angular/core';
import { fade, fadeSlide } from '../../shared/animations/animations';
import localeFr from '@angular/common/locales/fr';
import { RayonModel } from '../../shared/models/rayon-model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from 'express';
import { AuthService } from '../../authentication/services/auth.service';
import { MyEncryptionService } from '../../shared/services/my-encryption.service';
import { OuvrageServiceService } from '../../shared/services/ouvrage-service.service';
import { UtilisateurModel } from '../../shared/models/utilisateur.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

registerLocaleData(localeFr,'fr');
export  const  DATE_PIPE_DEFAULT_TIMEZONE  =  new  InjectionToken < string > ( 'DATE_PIPE_DEFAULT_TIMEZONE' ) ;

@Component({
  selector: 'app-liste-rayon',
  standalone: true,
  imports: [],
  templateUrl: './liste-rayon.component.html',
  styleUrls: ['./liste-rayon.component.css',]
  //animations: [fade, fadeSlide]
})
export class ListeRayonComponent implements OnInit,OnDestroy {

  constructor(private router: Router,
    private ouvrageService : OuvrageServiceService,
    private auth: AuthService,
    private modalService: NgbModal,
    private encryptService: MyEncryptionService,private route: ActivatedRoute,
    @Inject(LOCALE_ID) private locale: string,
    @Inject(DATE_PIPE_DEFAULT_TIMEZONE) @Optional()
    private defaultTimezone?: string | null,
   ){}

  page = 0;
  pageSize = 3;
  totalPage = 0;
  disablePrevious = true;
  disableNext = false;
  formModal: any;
  closeResult = '';
  archiveRayon = new RayonModel();
  searchForm: any;
  subscriptions = [] as Subscription[];
  modalRef: any;
  currentPatient: any;
  public rayonForm: any;
  rayon: RayonModel | undefined;
  show: boolean = false;
  rayons= [] as RayonModel[];
  connectedUser = new UtilisateurModel();

  ngOnInit(): void {

    this.getConnectedUser();
    console.log(this.connectedUser);
    this.getRayon(this.page, this.pageSize);
    this.rayonForm = new FormGroup({
    motif:new FormControl('',[Validators.required ] ),
    });
    this.initSearchForm();
    // const routeParam = this.route.snapshot.paramMap.get('rayonId');
    // if (routeParam) {
    //   const patientIdFromRoute = Number(this.encryptService.decryptText(routeParam));
    //   this.subscriptions.push(
    //     this.ouvrageService.getRAYONId(patientIdFromRoute).subscribe(
    //       (rayon: any) => {
    //         this.rayon = rayon;
    //       }
    //     )
    //   );
    // }
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  async getConnectedUser() {
    await this.auth.identity().toPromise().then(
      (result: any) => {
        this.connectedUser = result;
      }
    ).catch((error: any) => {console.log('cannot get connected user')})
  }

  getRayon(page: number = 0, size: number = 3) {
    this.ouvrageService.getRayonPage(page, size).subscribe(
      (data: any) => {
        this.page = data.currentPage;
        this.totalPage = data.totalPages;
        this.rayons = data.rayons;

      }, (error: any) => {
        this.router.get(['/gestion-ouvrage/liste-rayon']);
      }
    )
  }
  delete(id:any, p: RayonModel): void {
    this.archiveRayon = p;
    //console.log(this.patientForm.value.motif);
    this.ouvrageService.delete(id).subscribe(
      () => this.ngOnInit()
    );
  }


  onSelectedPageSize(event: any) {
    this.page = 0;
    this.pageSize = Number(event.target.value);
    this.getRayon(this.page, this.pageSize);
}

onSelectedFilterType(event: any) {
  // this.filterType = event.target.value;
}
// onSearch() {
//   if (this.searchForm.valid) {
//     //const structureID = this.connectedUser.structure && this.connectedUser.structure.id ? this.connectedUser.structure.id : 0;
//     this.subscriptions.push(
//       this.ouvrageService
//         .getAllPatientsByFiltered(this.searchForm.value.filterType, this.searchForm.value.searchTerm,this.page, this.pageSize)
//            .subscribe(
//             (data: any) => {
//               this.page = data.currentPage;
//               this.totalPage = data.totalPages;
//               this.rayons = data.rayons;
//             }, (error: any) => this.ngOnInit()
//            )
//     );
//   }
// }

clear() {
  this.searchForm.reset();
  this.getRayon(this.page, this.pageSize);
}
private initSearchForm() {
  this.searchForm = new FormGroup({
    'filterType': new FormControl(null, Validators.required),
    'searchTerm': new FormControl(null, [Validators.required])
  });
}

shouldShowFilterTypeRequiredError() {
  const filterType = this.searchForm.controls.filterType;
  return filterType.touched && filterType.hasError('required');
}

shouldShowSearchTermRequiredError() {
  const searchTerm = this.searchForm.controls.searchTerm;
  return searchTerm.touched && searchTerm.hasError('required');
}
precedent() {
  if((this.page-1) >= 0 ) {
    this.page--;
    this.getRayon(this.page, this.pageSize);
    this.disableNext = false;
  } else {
    this.disablePrevious = true;
  }

  if(this.page == 0) {
    this.disablePrevious = true;
  }
}

suivant() {
  if((this.page+1) < this.totalPage ) {
    this.page++;
    this.getRayon(this.page, this.pageSize);
    this.disablePrevious = false;
  } else {
    this.disableNext = true;
  }

  if ((this.page+1) >= this.totalPage) {
    this.disableNext = true;
    this.disablePrevious = false;
  }
}

}
function registerLocaleData(localeFr: any, arg1: string) {
  throw new Error('Function not implemented.');
}

