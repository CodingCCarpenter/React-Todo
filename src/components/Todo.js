import React from "react";
import styled from "styled-components";

const P = styled.p`
  display: inline-block;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  display: inline-block;
  font-size: 16px;
  margin: 1rem 0 1rem 2.3rem;
  line-height: 2.3;
  width: 40%;
  background: lightgray;
  border: 1.5px solid black;
  padding-left: 2%
  border-radius: 8px;
  box-shadow: 
    2px 2px 5px rgba(0,0,0,0.5),
    10px 10px 15px rgba(0,0,0,0.5),
   color: black;
  font-weight: 700;
`;


const Todo = (props) => {
  return (
    <div>
      <P
        onClick={props.handleCompleted}
        id={props.id}
        completed={props.completed}
      >
        {props.task}
      </P>
      <br />
    </div>
  );
};



export default Todo;