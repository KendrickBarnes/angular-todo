import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.text){
      alert('Please add a todo.');
      return;
    }
    const newTodo = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTodo.emit(newTodo);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
