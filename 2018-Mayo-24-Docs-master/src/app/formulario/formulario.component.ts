import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  
  
  nombre: string = "nombre del subscriptor";
  edad: number = 99;
  mail: string = "correo@usuario.com";

  constructor() { }

  ngOnInit() {
  }

}
