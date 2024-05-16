import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './page/producto/producto.component';
import { LibreComponent } from './page/libre/libre.component';
import { EscuelaComponent } from './page/escuela/escuela.component';
import { DanzaComponent } from './page/danza/danza.component';


@NgModule({
  declarations: [
    ProductoComponent,
    LibreComponent,
    EscuelaComponent,
    DanzaComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
