import React from "react";

import styled from "styled-components";

const Input = styled.input`
  display: inline-block;
  font-size: 16px;
  margin: 2.3rem;
  line-height: 2.3;
  border-radius: 24px;
  width: 25%;
  padding-left: 2%;
  border: 1.5px solid black;
  box-shadow: 
    2px 2px 5px rgba(0,0,0,0.5),
    10px 10px 15px rgba(0,0,0,0.5),
    -1px -1px 30px rgba(0,0,0,0.2)
  ;
  background: #60B2E5;
`;

const Button = styled.button`
display: inline-block;
font-size: 16px;
margin: 2.3rem;
line-height: 2.3;
border: 1.5px solid black;
border-radius: 24px;
box-shadow: 
  2px 2px 5px rgba(0,0,0,0.5),
  10px 10px 15px rgba(0,0,0,0.5),
  -1px -1px 30px rgba(0,0,0,0.2);
padding: 0 3% 0 3%;
background: #982649;
color: white;
font-weight: 700;
`;

const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Input className='input'
        type="text"
        placeholder="e.g. Check Homework"
        onChange={props.handleChange}
      />
      <Button className='button'>Add To-Do</Button>
      <Button className='button' onClick={props.handleClear}>Clear Completed</Button>
    </form>
  );
};

export default TodoForm;