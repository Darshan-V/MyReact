import Maverick from "./Maverick.js"
import React from "react"
/**@jsx.React.createElement */
const Todo = ({ todos }) => {
  // eslint-disable-next-line
  const [todo, setTodo] = Maverick.useState({
    value: "",
  })

  return todos.map((todo, index) => (
    <div className={"task"} key={index}>
      <span>
        <div>
          <input type="checkbox"></input>
        </div>
      </span>
      <div
        onClick={() =>
          setTodo({ value: todo.text })
        }
        className={"task-title"}
        key={index}
      >
        {todo.text}
      </div>
    </div>
  ))
}

export default Todo
