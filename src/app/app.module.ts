import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';

// VINCULACIONES/ IMPORTACIONES FIREBASE
import { environment } from 'src/environments/enviroment';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //COMPONENTES GLOBALES
    SharedModule,
    //INICIALIZA FIREBASE EN NUESTRO PROYECTO
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //AUTENTIFICACION
    AngularFireAuthModule,
    //Storage -> BD imagenes
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
