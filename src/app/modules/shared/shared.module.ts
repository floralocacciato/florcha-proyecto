import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule, MatButtonModule, MatButtonModule
  ]
})
export class SharedModule { }
