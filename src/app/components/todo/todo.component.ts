import { Tarea } from './models/tarea';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  tareasPendientes: Tarea[] = [];
  mostrarInfo: boolean = false;
  colorUrgente: string = 'text-danger';
  colorNoUrgente: string = 'text-info';
  colorMedio: string = 'text-warning';
  constructor() {}

  ngOnInit(): void {}

  agregarPendiente(
    inputPendiente: HTMLInputElement,
    inputDias: HTMLInputElement
  ) {
    const tarea: Tarea = {
      descripcion: inputPendiente.value,
      dias: parseInt(inputDias.value),
    };

    this.tareasPendientes.push(tarea);
    this.mostrarInfo = true;
    inputPendiente.value = '';
    inputDias.value = '';
  }

  eliminar(index: number) {
    this.tareasPendientes.splice(index, 1);
  }

  getColor(dias: number): string {
    let color = '';
    if (dias >= 4) {
      color = this.colorNoUrgente;
    } else if (dias < 4 && dias >= 1) {
      color = this.colorMedio;
    } else {
      color = this.colorUrgente;
    }

    return color;
  }
}
