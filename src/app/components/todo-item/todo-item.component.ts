import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output() 
  onDeleteTodo: EventEmitter<Todo> = new EventEmitter();  
  @Output()
  onUpdateTodo: EventEmitter<Todo> = new EventEmitter();


constructor() {}

  ngOnInit(): void{
    
  }

  onDelete(todo: Todo) {
    this.onDeleteTodo.emit(todo);
  }

  onUpdate(todo: Todo) {
    this.onUpdateTodo.emit(todo);
    

  }

}
