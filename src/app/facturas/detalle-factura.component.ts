import { Component, OnInit } from '@angular/core';
import { FacturaService } from './services/factura.service';
import { Factura } from './models/factura';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',

})
export class DetalleFacturaComponent implements OnInit {

  factura: Factura;
  // tslint:disable-next-line: no-inferrable-types
  titulo: string = 'Factura';

  constructor(private facturaService: FacturaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      // tslint:disable-next-line: prefer-const
      let id = +params.get('id');
      this.facturaService.getFactura(id).subscribe(factura => this.factura = factura);
    });
  }

  createFactElectronica(): void {
  
    //  if(facturaForm.form.valid && this.factura.items.length > 0){
      
      //this.facturaService.create(this.factura).subscribe(factura => {
        swal.fire(this.titulo, `Factura Electrónica creada con éxito!`, 'success');
      //  this.router.navigate(['/clientes']);
    //  });
    //}
    }

}
