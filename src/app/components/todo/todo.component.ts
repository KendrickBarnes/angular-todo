import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../Todo';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoservice: TodoService) {}

  ngOnInit(): void{
    this.todoservice.getTodos().subscribe((todos) => this.todos = todos);
  }

  deleteTodo(todo: Todo) {
    this.todoservice.deleteTodo(todo).subscribe(() => (this.todos =
      this.todos.filter(t => t.id !== todo.id)));
  }

  updateTodo(todo: Todo){
    todo.reminder = !todo.reminder;
    this.todoservice.updateTodoReminder(todo).subscribe();
    
  }

  addTodo(todo: Todo){

    this.todoservice.addTodo(todo).subscribe((todo) => this.todos.push(todo));
  }


}
