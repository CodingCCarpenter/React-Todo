import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
  return (
    props.todos.map(todo => {
      return (
        <Todo todo={todo} key={todo.id} onClick={props.toggleComplete} />
      )
    })
  )
}

export default TodoList;
