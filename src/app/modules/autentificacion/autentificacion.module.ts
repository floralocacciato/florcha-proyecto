import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { RegistroComponent } from './registro/registro.component';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [
    AutentificacionRoutingModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule
  ]
})
export class AutentificacionModule { }
