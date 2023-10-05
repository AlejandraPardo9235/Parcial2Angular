import { Component, OnInit } from '@angular/core';
import { CitaService } from '../cita.service';
import { Cita } from '../cita';
import { Citas } from '../citas';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cedula: string = "";
  nombre: string = "";
  fecha: string = "";
  hora: string = "";
  observaciones: string = "";

  constructor(private citaService: CitaService) {

  }


  ngOnInit(): void {
    this.citaService.getListarCitas().subscribe((citasRecibidas: Citas) => {
      citasRecibidas.citas;

    })
  }

  editarCita() {
    const cita: Cita = {
      cedula: this.cedula,
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      observaciones: this.observaciones
    }
    this.citaService.guardarCita(cita).subscribe(
      (response) => {
        alert('Cita guardada con éxito');

      },
      (error) => {
        alert('Error al guardar la cita: ' + error.message);
      }
    );
  }

}
