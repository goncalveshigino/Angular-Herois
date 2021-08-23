import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroiComponent } from './pages/heroi/heroi.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HeroisRoutingModule } from './herois-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroiTarjetaComponent } from './components/heroi-tarjeta/heroi-tarjeta.component';
import { ImagePipe } from './pipe/image.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';







@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroiComponent,
    HomeComponent,
    ListarComponent,
    HeroiTarjetaComponent,
    ImagePipe,
    ConfirmarComponent
 
  ],
  imports: [
    CommonModule,
    HeroisRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class HeroisModule { }
