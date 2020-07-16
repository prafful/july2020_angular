import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodolistService } from "../todolist.service";


@Component({
  selector: 'cts-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:any = null
  displayAddTodo:boolean = false
  newtodo:string = null
  newtodostatus:string="pending"

  displayEditTodo:boolean=false
  edittodoid:number = null
  edittodo:string = null
  edittodostatus:string = null

  @ViewChild('mytodo') mytodoEl:ElementRef

  constructor(private todolist: TodolistService) { }

  ngOnInit(): void {
    this.retrieveAllTodos()    
  }

  retrieveAllTodos=()=>{
    this.todolist.getAllTodos().subscribe(response=>{
      console.log(response)
      this.todos = response
    }, error=>{
      console.log(error)
    })
  }

  openAddTodoField=()=>{
    this.displayAddTodo = !this.displayAddTodo
    this.mytodoEl.nativeElement.focus()
  }

  closeAddTodoField=()=>{
    this.displayAddTodo = !this.displayAddTodo
    this.newtodo = null 
    this.newtodostatus = "pending"
  }

  captureNewTodo=(td)=>{
    console.log(td.value)
    this.todolist.addTodo(td.value)
                  .subscribe(response=>{
                              console.log(response)    
                              this.newtodo = null 
                              this.newtodostatus = "pending"
                              this.displayAddTodo = false
                              this.retrieveAllTodos()               
                  }, error=>{
                              console.log(error)
                  })

  }

  removeTodo=(id)=>{
    this.todolist.deleteTodoById(id)
                  .subscribe(response=>{
                    this.retrieveAllTodos()
                  },error=>{
                    console.log(error)
                  })
  }


  openEditTodoField=(id)=>{
    //this.displayAddTodo = !this.displayAddTodo
    this.displayEditTodo =! this.displayEditTodo
    this.todolist.getTodoById(id)
                  .subscribe(response=>{
                    console.log(response)
                    this.edittodoid = response.id
                    this.edittodo = response.todo
                    this.edittodostatus = response.status
                  }, error=>{
                    console.log(error)
                  })

  }

  captureEditTodo=(td)=>{
  console.log(td.value)
  this.todolist.updateTodoById(td.value.id, td.value)
                  .subscribe(response=>{
                    console.log(response)
                    this.displayEditTodo = false
                    this.retrieveAllTodos()
                  },error=>{
                    console.log(error)
                  })
  }

}
