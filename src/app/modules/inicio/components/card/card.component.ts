import { Component } from '@angular/core';
// IMPORTAMOS LA INTERFAZ

import { Patines } from 'src/app/models/patines';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
// propiedad public (TIPO ARRAY)
public info: Patines[]; 

constructor(){
  this.info  = [
    {
      id: "",
      nombre: "Mercurio",
      imagen: "https://egress.storeden.net/gallery/643a7244202628ed19298526",
      alt: "Patin",
      disciplina: "Libre"
    },

    {
      id: "",
      nombre: "Ambra",
      imagen: "https://egress.storeden.net/gallery/643a712bbe7ea0770163c898",
      alt: "Patin",
      disciplina: "Libre"
    },

    {
      id: "",
      nombre: "Fly",
      imagen: "https://egress.storeden.net/gallery/643a6fdb00f220e39770097b",
      alt: "Patin",
      disciplina: "Libre"
    }
  ]
}
}
