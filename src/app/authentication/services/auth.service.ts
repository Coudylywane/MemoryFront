import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { UtilisateurModel } from '../../shared/models/utilisateur.model';
//import { SocketService } from 'src/app/shared/services/socket-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  SECRET = 'smartmaskosc2020';
  errCon = false;
  utilisateur?: UtilisateurModel

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  async authenticationProcess(url: string, body: any) {
    await this.http.post<any>(url, body).toPromise()
      .then((data) => {
        console.log(data);
        this.setSession(data).then(x => {
          this.identity().subscribe((user: any) => {
            this.storeUser(user)
                  .then(() => {
                    this.router.navigate(['/gestion-ouvrage/liste-rayon']);
                  });
          }, (error: any) => console.log(error));
        });
      }).catch((error1) => this.errCon = true);
    return this.errCon;
  }

  async login(credentials: any) {
    return this.authenticationProcess('/api/login', {login: credentials.login, password: credentials.password});
  }

  async setSession(authResult: any) {
    localStorage.removeItem('id_token');
    localStorage.setItem('id_token', authResult.token);
  }

  async storeUser(user: any) {
    localStorage.removeItem('mdd_user');
    localStorage.setItem('mdd_user',JSON.stringify(user));
    // this.storage.store('mdd_user', this.convertText('encrypt', user));
  }

  token() {
    return localStorage.getItem('id_token')?.toString();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('mdd_user');
    this.router.navigate(['/login']);
  }

  public identity() {
    return this.http.get<any>('/api/connected-user');
  }

  hasAuthority(authorities: string[], user: UtilisateurModel): boolean {
    for (const authority of authorities) {
      if (user?.role?.libelle === authority) {
        return true;
      }
    }
    return false;
  }
}
