import { Component} from '@angular/core';

@Component({  //decorador de la clase
selector: 'app-footer',
templateUrl: './footer.component.html',
styleUrls: ['footer.component.css'],

})
export class FooterComponent {
  public autores: any = {nombre1: 'Alexis', apellido1: 'Herrera',nombre2: 'Sandra', apellido2: 'Mejía',nombre3: 'Miguel', apellido3: 'Naranjo'};
}
