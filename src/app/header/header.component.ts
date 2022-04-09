import { Component } from '@angular/core';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent { //export es el modificador de la clase
  title: string = 'Gestor de Ventas'

  constructor(public authService: AuthService, public router: Router) { }

//método para cerrar sesión y redirigir al login
  logout():void{
    let username = this.authService.usuario.username;
    this.authService.logout();
    swal.fire('Logout',`Hola ${username}, has cerrado sesión con éxito`,'success');
    this.router.navigate(['/login']);
  }

}
