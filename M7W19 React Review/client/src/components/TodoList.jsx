import React from "react"
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  // console.log(props.todos);
  const mappedProps = props.todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />
  })
  return (
    <div>
      {mappedProps}
    </div>
  )
};

export default TodoList;
