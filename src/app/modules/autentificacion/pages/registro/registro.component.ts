import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//Servicio de autentificacion 
import { AuthService } from '../../services/auth.service';
//servivio de rutas que otorga Angular 
import { Router } from '@angular/router';
//servicio de firestore
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
@Component({

  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Este hide es para el input de contraseña
  hide = true;

  //importacion del modelo /interfaz
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  //Crear una coleccion para usuarios
  coleccionUsuarios: Usuario[] = [];

  constructor(
    public servicioAuth:AuthService, //metodo de autentificacion 
    public servicioFirestore: FirestoreService, //vincula UID  con la coleccion
    public servicioRutas: Router // metodo de navegacion 
   
  ) {}

  //funcion asintronica para el registro
  async registrar() {
    // const credenciales = {
    //   uid: this.usuarios.uid,
    //   nombre: this.usuarios.nombre,
    //   apellido: this.usuarios.apellido,
    //   email: this.usuarios.email,
    //   rol: this.usuarios.rol,
    //   password: this.usuarios.password
    // }
    // enviamos los nuevos registros por medio del metodo push a la coleccion 
   // this.coleccionUsuarios.push(credenciales);

    //por consola
   // console.log(credenciales);
   // console.log(this.coleccionUsuarios);
    // enviamos los nuevos registros por medio del método push a la colección
    // this.coleccionUsuarios.push(credenciales);

    // Notificamos al usuario el correcto registro
   // alert("Te registraste con éxito :)");}
    //######## FIN LOCAL

   const credenciales = {
    email: this.usuarios.email, 
    password: this.usuarios.password
  }

  //constante res = resguarda una respuesta
  const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
  //el metodo then nos devuelve la respuesta esperada por la promesa
  .then(res => {
    alert("Ha agregado un usuario con exito");
    //accedemos al servicio de rutas -> metodo navigate
    //metodo NAVIGATE = permite dirigirnos a diferentes vistas
    this.servicioRutas.navigate(['/inicio'])
  })
  //el metodo CATCH toma una falla y la vuelve un error
  .catch(error => {
    alert('Hubo un pronlema al registrar un nuevo usuario')
  })

  const uid= await this.servicioAuth.obtenerUid();
  
  this.usuarios.uid = uid;

    // Llamamos a la función limpiarInputs() para que se ejecute
    this.limpiarInputs();

    // por consola
   // console.log(credenciales);
    // console.log(this.coleccionUsuarios)
    // console.log(credenciales);
    // console.log(this.coleccionUsuarios)

    
  }
  //funcion para agregar un nuevo usuario
  async guardarUsuario(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);
    
    }) 
    .catch(err=> {
      console.log ('error=>', err);
    }
    )
  }  

  // Función para vaciar el formulario
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}







