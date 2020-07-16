import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) { }

  getAllTodos(){
    return this.http.get('http://localhost:3000/todolist')
  }

  //http://localhost:3000/todolist/1
  getTodoById(id):any{
    return this.http.get('http://localhost:3000/todolist/'+ id)
  }

  //http://localhost:3000/todolist/1
  deleteTodoById(id){
    return this.http.delete('http://localhost:3000/todolist/'+id)
  }

  //http://localhost:3000/todolist/1  and todo object 
  updateTodoById(id, todo){
    return this.http.put('http://localhost:3000/todolist/'+id, todo)
  }

  addTodo(todo){
    return this.http.post('http://localhost:3000/todolist', todo)
  }


}
