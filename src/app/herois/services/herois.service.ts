
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  constructor(private http: HttpClient) { }
  
  getHerois() {
    return this.http.get('http://localhost:3000/heroes');
  }

}
