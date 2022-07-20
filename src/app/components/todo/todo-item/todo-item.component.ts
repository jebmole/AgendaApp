import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from '../models/tarea';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor(private todoService: TodoService) {}

  @Input() position: number = 0;
  @Input() tareaInput: Tarea = {
    descripcion: "",
    dias:0
  };

  @Input() color:string = "";

  ngOnInit(): void {
  }

  eliminar(){
    this.todoService.eliminarTarea(this.position);
  }
}
