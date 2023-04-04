import React from "react";
import './TodoListItem.scss'

const TodoListItem = (props) => {
  console.log(props);
  const isCompleted = false;
  return (
    <div className="todo-list-item">
      <h3>Task: {props.todo.task} ({props.todo.id})</h3>
      <h4>Completed : {props.todo.isCompleted ? "✅" : "🟩"}</h4>
    </div>
  )
};

export default TodoListItem;
