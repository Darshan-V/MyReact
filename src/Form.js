import Maverick from "./Maverick.js"
import React from "react"

/**@jsx.Maverick.createElement */

function TodoForm(props) {
  const [input, setInput] = Maverick.useState("")
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      text: input,
    })
    setInput("")
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="todo-form"
      >
        <input
          placeholder="Add a todo"
          value={input}
          onChange={handleChange}
          name="text"
          className="todo-input"
        />
      </form>
    </div>
  )
}

export default TodoForm
