import React from "react";
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";

const TodoList = (props) => {
  return (
    <div>
      {props.state.data.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          task={item.task}
          completed={item.completed}
          handleCompleted={props.handleCompleted}
        />
      ))}
      <TodoForm
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        handleClear={props.handleClear}
      />
    </div>
  );
};

export default TodoList;