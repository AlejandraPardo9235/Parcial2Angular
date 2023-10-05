import { Component, OnInit } from '@angular/core';
import { CitaService } from '../cita.service';
import { Citas } from '../citas';
import { Cita } from '../cita';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

public citas: Cita[] = [];

constructor(private citaService: CitaService){}
  ngOnInit(): void {
    this.citaService.getListarCitas().subscribe((citasRecibidas: Citas) => {
      this.citas=citasRecibidas.citas;
    })
  }



}
