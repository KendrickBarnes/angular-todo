import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../components/Todo';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://192.168.0.49:8080/todos/';
  
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]>{

    return this.http.get<Todo[]>(this.apiUrl);

  }

  deleteTodo(todo: Todo): Observable<Todo>{

    const url =`${this.apiUrl}${todo.id}`;
    return this.http.delete<Todo>(url);
  }

  updateTodoReminder(todo: Todo): Observable<Todo>{
    const url =`${this.apiUrl}${todo.id}`;
    
    return this.http.put<Todo>(url,todo);

  }

  addTodo(todo: Todo): Observable<Todo>{

    return this.http.post<Todo>(this.apiUrl, todo);

  }
}
