import { Maverick } from "./Maverick.js"
import TodoList from "./TodoList.js"

/** @jsx Maverick.createElement */
function Test() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  )
}

const element = <Test />
const container = document.getElementById("root")
Maverick.render(element, container)
