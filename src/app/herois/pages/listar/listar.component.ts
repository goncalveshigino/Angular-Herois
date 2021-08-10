import { Component, OnInit } from '@angular/core';
import { Heroi } from '../../interfaces/heroi.interface';
import { HeroisService } from '../../services/herois.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [`
    mat-card {
      margin-top: 20px
    }
  `]
})
export class ListarComponent implements OnInit {

  herois: Heroi[] = [];
  constructor( private heroisService: HeroisService ) { }

  ngOnInit(): void {

    this.heroisService.getHerois()
      .subscribe(herois => this.herois = herois );
  }



}
