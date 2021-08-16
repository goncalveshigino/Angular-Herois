import { Component, OnInit } from '@angular/core';

import { switchMap,tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroi } from '../../interfaces/heroi.interface';
import { HeroisService } from '../../services/herois.service';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styles: [
    `{
      img {
        width: 100%;
        border-radius: 5px;
      }
    }`
  ]
})
export class HeroiComponent implements OnInit {

  heroi!: Heroi;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroisService: HeroisService,
    private router: Router
  ) { }

  ngOnInit(): void {

    //Pegar por id
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroisService.getHeroiPorID(id) ),
        tap( console.log )
      )
       .subscribe( heroi =>  this.heroi = heroi );
  }

  regressar() {
    this.router.navigate(['/herois/listar']);
  }

}
