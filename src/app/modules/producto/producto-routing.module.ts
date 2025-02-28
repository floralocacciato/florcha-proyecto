import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './page/producto/producto.component';
import { LibreComponent } from './page/libre/libre.component';
import { EscuelaComponent } from './page/escuela/escuela.component';
import { DanzaComponent } from './page/danza/danza.component';

const routes: Routes = [
  {
    path:"producto", component:ProductoComponent
  }, 
  {
    path:"libre", component:LibreComponent
  },
  {
    path:"escuela", component:EscuelaComponent
  },
  {
    path:"danza", component:DanzaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
