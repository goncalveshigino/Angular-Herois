import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroiComponent } from './pages/heroi/heroi.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HeroisRoutingModule } from './herois-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';






@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroiComponent,
    HomeComponent,
    ListarComponent
 
  ],
  imports: [
    CommonModule,
    HeroisRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class HeroisModule { }
