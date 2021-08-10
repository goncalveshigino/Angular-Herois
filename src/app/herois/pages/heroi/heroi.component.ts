import { Component, OnInit } from '@angular/core';
import { HeroisService } from '../../services/herois.service';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styles: [
  ]
})
export class HeroiComponent implements OnInit {

  constructor( private heroisService: HeroisService ) { }

  ngOnInit(): void {

    this.heroisService.getHerois()
      .subscribe(resp => {
           console.log( resp );
      })
  }

}
