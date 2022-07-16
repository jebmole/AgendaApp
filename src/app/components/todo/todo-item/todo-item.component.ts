import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() position: number = 0;
  @Input() tareaInput: Tarea = {
    descripcion: "",
    dias:0
  };

  @Input() color:string = "";

  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
  }

  eliminar(){
    this.onDelete.emit(this.position);
  }
}
