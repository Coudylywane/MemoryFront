import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from 'express';
import { RayonModel } from '../models/rayon-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OuvrageServiceService implements OnInit {

  api = '/api/';
  constructor(private http: HttpClient,private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ////////////////  RAYON ///////////////////
  //////// AJOUT /////
  addRayon(rayonModel : RayonModel): Observable<RayonModel>{
    return this.http.post<RayonModel>(this.api+"rayon/add",rayonModel);
  }

  //////// PAGINATION /////
  getRayonPage(page = 0, size = 5):Observable<RayonModel>{
    const options = {
      params: new HttpParams().set('page', page).set('size', size)
    }
    return this.http.get<any>(this.api+"rayon/list", options);
  }

  //////// DELETED /////
  delete(id: any){
    return this.http.delete<any>(this.api+'delete/'+Number(id));
  }

  //////// UPDATE RAYON ///////////
  update(rayonModel : RayonModel) : Observable<RayonModel> {
    return this.http.put<RayonModel>(this.api+"update"+rayonModel.id,rayonModel)
  }

  ////////// FIND BY ID ///////////
  getRAYONId(rayonId: number){
    return this.http.get(this.api+'rayon/id/'+ rayonId);
  }

  
}
