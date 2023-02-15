import {makeAutoObservable} from "mobx";
import {ITodo} from "../types/todo";

class TodoStore {
  idTodoEdit: null | number = null
  todos: ITodo[] = []
  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo: ITodo) {
    this.todos = [todo, ...this.todos]
  }

  checkedTodo(id: number) {
    this.todos.forEach(todo => {
      if (todo.id === id) todo.completed = !todo.completed
    })
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  changeIdEditedTodo(id: number | null){
    this.idTodoEdit = id
  }

  editTodo(id: number, title: string, body: string){
    this.todos.forEach(todo => {
      if (todo.id === id){
        todo.title = title
        todo.body = body
      }
    })
  }

}

export default new TodoStore()