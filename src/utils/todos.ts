import {ITodo} from "../types/todo";
import todoStore from "../store/TodoStore";

export const getSearchTodos = (todos: ITodo[], searchValue: string) => searchValue
  ? todos.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()))
  : todos

export const getSortedTodos = (todos: ITodo[], select: string) => {
  switch (select) {
    case "title":
      return [...todos].sort((a, b) => a.title.localeCompare(b.title))

    case "body":
      return [...todos].sort((a, b) => a.body.localeCompare(b.body))

    case 'completed':
      return todos.filter(todo => todo.completed)

    case 'uncompleted':
      return todos.filter(todo => !todo.completed)

    case 'time':
      return todoStore.todos

    default:
      return todos
  }
}