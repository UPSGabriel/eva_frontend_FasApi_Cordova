import { Component, OnInit } from '@angular/core';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {


  vehiculos: any[] = [];

  nuevo: any = {


    placa: '',
    propietario: '',
    marca: '',
    fabricacion: 2024,
    valor_comercial: 0


  };

  constructor(private service: VehiculoService) {}

  ngOnInit()
  {

    this.cargarVehiculos();

  }

  cargarVehiculos()
  {
    this.service.obtenerTodos().subscribe({
      next: (data: any) => {
        this.vehiculos = data;
        console.log('datos cargados:', data);
      },
      error: (e: any) => console.error(e)
    });
  }

  guardar()
  {

    console.log("enviando:", this.nuevo);
    this.service.registrar(this.nuevo).subscribe({
      next: (res: any) => {
        alert('Vehículo registrado exitosamente; Codigo Revision: ' + res.codigo_revision);
        this.cargarVehiculos();
        this.nuevo = { placa: '', propietario: '', marca: '', fabricacion: 2024, valor_comercial: 0 };
      },
      error: (err: any) => {
        alert('Error: ' + (err.error.detail || 'Error desconocido'));
      }
    });
  }
}
