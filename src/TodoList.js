import Maverick from "./Maverick.js"
import React from "react"
import TodoForm from "./Form"
import Todo from "./Todo"

/**@jsx.Maverick.createElement */

function TodoList() {
  const [todos, setTodos] = Maverick.useState([])
  //   console.log(todos)

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} />
    </div>
  )
}

export default TodoList
