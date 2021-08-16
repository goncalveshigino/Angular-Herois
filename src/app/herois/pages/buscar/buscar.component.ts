import { Component, OnInit } from '@angular/core';
import { Heroi } from '../../interfaces/heroi.interface';
import { HeroisService } from '../../services/herois.service';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  herois: Heroi[] = [];
  heroiSelecionado: Heroi | undefined;

  constructor( private heroisService: HeroisService ) { }

  ngOnInit(): void {
  }

  buscando() {

    this.heroisService.getSugerencias( this.termino.trim() )
      .subscribe(herois => this.herois = herois);
    
  }

  opcaoSelecionada(event: MatAutocompleteActivatedEvent) {

    if (!event.option?.value) {
      this.heroiSelecionado = undefined;
      return;
    }
    
    const heroi: Heroi = event.option?.value;
    this.termino = heroi.superhero;
     
    this.heroisService.getHeroiPorID( heroi.id! )
        .subscribe( heroi => this.heroiSelecionado = heroi );
  }

}
