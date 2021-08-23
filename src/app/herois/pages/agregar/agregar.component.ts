import { Component, OnInit } from '@angular/core';
import { Heroi, Publisher } from '../../interfaces/heroi.interface';
import { HeroisService } from '../../services/herois.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

 publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ];

  heroi: Heroi = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor( private heroisService: HeroisService   ) { }

  ngOnInit(): void {
  }

  salvar() {
    
    if (this.heroi.superhero.trim().length === 0) {
      return;
    }

    this.heroisService.addHeroi( this.heroi )
      .subscribe(resp => {
        console.log('Respostas', resp);
      })

  }

}
