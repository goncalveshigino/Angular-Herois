import { Component, OnInit } from '@angular/core';
import { Heroi, Publisher } from '../../interfaces/heroi.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id  : 'DC Comics',
      desc: 'DC - Comics'
    },
     {
      id  : 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroi: Heroi = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
