import React from "react";

const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="e.g. Commit Murder"
        onChange={props.handleChange}
      />
      <button>Add To-Do</button>
      <button onClick={props.handleClear}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;