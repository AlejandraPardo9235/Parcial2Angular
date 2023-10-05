import { Component } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  cedula: string = "";
  nombre: string = "";
  fecha: string="";
  hora: string = "";
  observaciones: string = "";

  constructor(private citaService: CitaService) { }

   guardarCita() {
    const cita: Cita = {
      cedula:this.cedula,
      nombre:this.nombre,
      fecha:this.fecha,
      hora:this.hora,
      observaciones:this.observaciones
    }
    this.citaService.guardarCita(cita).subscribe(
      (response) => {
        alert('Cita guardada con éxito');
        this.cedula = "",
        this.nombre = "",
        this.fecha = "";
        this.hora = "",
        this.observaciones = "";
      },
      (error) => {
        alert('Error al guardar la cita: ' + error.message);
      }
    );
  }


}
