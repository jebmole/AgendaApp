import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tareasPendientes: string[] = [];
  mostrarInfo: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  agregarPendiente(input: HTMLInputElement){
    this.tareasPendientes.push(input.value);
    this.mostrarInfo = true;
    input.value = "";
  }

  eliminar(index: number){
    this.tareasPendientes.splice(index,1);
  }
}
