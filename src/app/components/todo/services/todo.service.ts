import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {
    console.log('Hola desde el servicio');
  }

  private todoItems: Tarea[] = [
    {
      descripcion: 'Tarea 1',
      dias: 0,
    },
  ];

  get myToDoItems(): Tarea[] {
    return this.todoItems;
  }

  agregarTarea(tarea:Tarea): void{
    this.todoItems.push(tarea);
  }

  eliminarTarea(index: number): void{
    this.todoItems.splice(index,1);
  }
}
