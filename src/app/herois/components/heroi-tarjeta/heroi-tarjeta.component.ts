import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Heroi } from '../../interfaces/heroi.interface';

@Component({
  selector: 'app-heroi-tarjeta',
  templateUrl: './heroi-tarjeta.component.html',
  styles: [
  ]
})
export class HeroiTarjetaComponent  {

 @Input() heroi!: Heroi;

}
