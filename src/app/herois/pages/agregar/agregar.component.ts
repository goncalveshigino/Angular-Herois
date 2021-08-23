import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroi, Publisher } from '../../interfaces/heroi.interface';
import { HeroisService } from '../../services/herois.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img {
      width: 100%;
      border-radius: 5px;
    }
    `
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

  constructor(private heroisService: HeroisService,
              private router: Router,
              public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroisService.getHeroiPorID( id ) )
      )
      .subscribe( heroi => this.heroi = heroi );

  }

  salvar() {
    
    if (this.heroi.superhero.trim().length === 0) {
      return;
    }

    if (this.heroi.id) {
      //atualizar
      this.heroisService.updateHeroi(this.heroi)
        .subscribe(heroi => this.mostrarSnackBar('Registro atualizado') )
      
    } else {
      //criar
     this.heroisService.addHeroi( this.heroi )
      .subscribe(heroi => {
        this.router.navigate(['/herois/editar', heroi.id]);
        this.mostrarSnackBar('Registro Criado');
      })

    }


  }

  remove() {

     //Usar dialog
   const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroi
   });
    
    dialog.afterClosed().subscribe(
      (result) => {

        if (result) {
            this.heroisService.removeHeroi(this.heroi.id!)
              .subscribe(resp => {
               this.router.navigate(['/herois']);
          });
        }

     }
   )
    
    
  
  }

  mostrarSnackBar(msg: string) {

    this.snackBar.open(msg, 'Ok..!', {
      duration: 2500
    })

  }

}
