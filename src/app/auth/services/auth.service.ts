import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { tap } from 'rxjs/operators';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseURL;

  private _auth: Auth | undefined;

  get auth(): Auth {
    return {...this._auth! }
  }


  constructor(private http: HttpClient) { }
  

  login() {
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth),
        tap( auth => localStorage.setItem('id', auth.id) ),
      )
  }

  logout() {
    this._auth = undefined;
  }

}
