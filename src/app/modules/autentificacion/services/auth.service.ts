import { Injectable } from '@angular/core';
//Servicio de AUTENTIFICACION de FIREBASE
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
//referenciar Auth de Firebase para inicializarlo
  constructor(public auth:AngularFireAuth) { }

  //funcion para tomar UID

  //funcion para REGISTRO
  registrar(email:string, password:string) { 
    //retorna nueva informacion de EMAIL y CONTRASEÑA
    return this.auth.createUserWithEmailAndPassword(email,password);
   }
  //funcion para INICIO DE SESION 
   iniciarSesion(email:string, password:string){
    //valida el email y contraseña
    return this.auth.signInWithEmailAndPassword(email,password)
   }
  //funcion para cerrar sesion 
  cerrarSesion(){
    //devolver una promesa vacia
    return this.auth.signOut()
  }

  //Funcion para tomar UID
  async obtenerUid(){
    //nos genera una promesa. y la constante la va a capturar
    const user= await this.auth.currentUser;

    // si el usuario no respeta la estructura de la interfaz 
  // si tuvo problemas para el registro -> ej mal internet
  
  if(user==null){
    return null;
  } else {
    return user.uid;
  }
  }

  

}
