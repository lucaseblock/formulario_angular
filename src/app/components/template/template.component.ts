import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `
     
    `
  ]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [{
    codigo: "ARG",
    nombre: "Argentina"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }
]

  sexos:string[] = ["Hombre", "Mujer", "Sin definir"]



  constructor() { }

  ngOnInit() {
  }

  guardar( forma: NgForm ) {
    console.log('Formulario posteado');
    console.log( forma );
    console.log( 'forma', forma.value );
    console.log('usuario', this.usuario);
  }

}
