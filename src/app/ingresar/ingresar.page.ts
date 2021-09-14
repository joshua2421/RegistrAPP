import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {
  nombre_v: String;
  contra_v : String;
  constructor() { }

  ngOnInit() {
  }
  Datos_alumno(nombre: HTMLInputElement ,contrasena:HTMLInputElement)
  {
    this.nombre_v= "Joshua123"
    this.contra_v = "1234"
    let nom = nombre;
    let contra = contrasena;
  }
}
