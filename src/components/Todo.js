import React from 'react';
import './Todo.css';


const Todo = props => {
  return (
    <div className={`todo${props.todo.completed ? ' complete' : ''}`} id={props.todo.id} onClick={props.onClick}>
      {props.todo.task}
    </div>
  )
}

export default Todo;