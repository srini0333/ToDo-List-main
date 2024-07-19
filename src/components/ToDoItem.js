import React from 'react'

const ToDoItem = (props) => {
  return (
    <div className="todo-item">
      <span className="todo-text">{props.text}</span>
      <button className="delete-button" onClick={() => props.deleteItem(props.id)}>Delete</button>
    </div>
  )
}

export default ToDoItem
