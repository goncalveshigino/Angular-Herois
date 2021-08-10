
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Heroi } from '../interfaces/heroi.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  constructor(private http: HttpClient) { }
  
  getHerois(): Observable<Heroi[]> {
    return this.http.get<Heroi[]>('http://localhost:3000/heroes');
  }

}
