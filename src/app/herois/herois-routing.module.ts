import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroiComponent } from './pages/heroi/heroi.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';


const routes: Routes = [
    
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: HeroiComponent
      },
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: '**',
        redirectTo: 'listar'
      }
    ]
  }
]



@NgModule({

  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroisRoutingModule { }
