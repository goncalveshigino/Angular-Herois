
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Heroi } from '../interfaces/heroi.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroisService {
  
  private baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) { }
  
  getHerois(): Observable<Heroi[]> {
    return this.http.get<Heroi[]>(`${ this.baseURL }/heroes`);
  }

  getHeroiPorID(id: string): Observable<Heroi> {
    return this.http.get<Heroi>(`${ this.baseURL }/heroes/${ id }`);
  }

  getSugerencias( termino: string ):Observable<Heroi[]> {
    return this.http.get<Heroi[]>(`${ this.baseURL }/heroes?q=${ termino }&_limit=6`)
  }


  addHeroi( heroi: Heroi ): Observable<Heroi>{
    return this.http.post<Heroi>(`${ this.baseURL}/heroes`, heroi)
  }

}
