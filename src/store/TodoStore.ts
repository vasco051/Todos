import {makeAutoObservable} from "mobx";
import {ITodo} from "../types/todo";

class TodoStore{
    todos: ITodo[] = []
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: ITodo) {
        this.todos = [todo ,...this.todos]
    }

    checkedTodo(id: number){
        this.todos.forEach(todo => {
            if (todo.id === id) todo.completed = !todo.completed
        })
    }

    removeTodo(id: number){
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
}

export default new TodoStore()