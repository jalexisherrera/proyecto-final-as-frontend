import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',

})
export class DirectivaComponent  {

  listaEmpleados: string[] = ['Sandra Mejía - Administradora', 'Miguel Naranjo  - Gerente', 'Alexis Herrera - Usuario'];

  habilitar: boolean = true;
  constructor() { }

  setHabilitar(): void{
    this.habilitar = (this.habilitar==true)? false: true;
  }
}
