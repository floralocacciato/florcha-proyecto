import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
//  // Este hide es para el input de contraseña
//  hide = true;

 
//  //importacion del modelo /interfaz
//  usuario: Usuario ={
//    uid: '',
//    nombre: '',
//    apellido: '',
//    email: '',
//    rol:'',
//    password: ''
//  }

//  public info: Usuario[];

//  constructor(private route: ActivatedRoute){
//    this.info = [
//      {
//       uid: "",
//       nombre: "",
//       apellido:"",
//       rol: "",
//       email: "florencialocacciato@gmail.com",
//       password: "Flor15",
//      },
//      {
//       uid: "",
//       nombre: "",
//       apellido:"",
//       rol: "",
//       email: "daniellocacciato@gmail.com",
//       password: "Flor30",
//      }
//    ]
//   }



//   // ngOnInit() {
//   //   this.route.params.subscribe(params => {
//   //     const email= +params['email'];
//   //     this.usuarios= this.info.find(item => item.email = email)
//   //   });
  
//   // };

//   // metodo para el inicio de sesión
//   iniciarsesion() {
//     //defino la variable del usuario y uso el metodo find para buscar un usuario en el arreglo info que tenga ese email o contraseña
//     const usuarioinicio = this.info.find(
//       (user) => user.email === this.usuario.email && user.password === this.usuario.password
//     )
//     console.log( usuarioinicio)
//     //si encuentra el usuario, puede inciar sesion
//     if (usuarioinicio) {
//       alert('inicio de sesion exitoso');
//     } else {
//       alert('email o contraseña incorrectos');
//     }
//   }

hide = true;

  // ####################################### LOCAL
  // Definimos la propiedad local para que guarde la colección
  public coleccionUsuariosLocal: Usuario[];

  // COLECCIÓN LOCAL DE USUARIOS CON INFORMACIÓN
  constructor(){
    this.coleccionUsuariosLocal = [
      {
        uid: '',
        nombre: 'Leandro',
        apellido: 'Soto',
        email: 'leandrosoto@gmail.com',
        rol: 'admin',
        password: '123456'
      },
      {
        uid: '',
        nombre: 'Pepe',
        apellido: 'Novita',
        email: 'pepenovita@gmail.com',
        rol: 'vis',
        password: 'abc123'
      },
      {
        uid: '',
        nombre: 'Tomas',
        apellido: 'Loyola',
        email: 'tomasloyola@gmail.com',
        rol: 'admin',
        password: 'abcdef'
      }
    ]
  }

  // ####################################### FIN LOCAL

  // ####################################### INGRESADO
  // Importamos la interfaz de usuario e inicializamos vacío
  usuarioIngresado: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // Función para el inicio de sesión
  iniciarSesion(){
    // Las credenciales reciben la información que se envía desde la web
    const credenciales = {
      uid: this.usuarioIngresado.uid,
      nombre: this.usuarioIngresado.nombre,
      apellido: this.usuarioIngresado.apellido,
      email: this.usuarioIngresado.email,
      rol: this.usuarioIngresado.rol,
      password: this.usuarioIngresado.password
    }

    // Repetitiva para recorrer la colección local
    for(let i = 0; i < this.coleccionUsuariosLocal.length; i++){
      // Constante que guarde la información de la posición actual de los objetos
      const usuarioLocal = this.coleccionUsuariosLocal[i];

      /*
      Comparando uno por uno los atributos del objeto local con el que ingresa el 
      usuario */
      if(usuarioLocal.nombre === credenciales.nombre && 
        usuarioLocal.apellido === credenciales.apellido && 
        usuarioLocal.email === credenciales.email && 
        usuarioLocal.rol === credenciales.rol && 
        usuarioLocal.password === credenciales.password
      ){
        // Notificamos al usuario su correcto ingreso
        alert("Iniciaste sesión correctamente :)");
        // Paramos la función
        break;
      } else {
        alert("No se pudo iniciar sesión :(");
        break;
      }
    }
  }
 
}