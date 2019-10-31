import React from 'react';
import ReactDOM from "react-dom";

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles.css';

const  data = [
  {
    task: 'Sample Task',
    id: 1528817077286,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //constructor with state
  constructor() {
    super();
    this.state = {
      todoItems: data
    };
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  //class method to mark tasks as completed (will be passed down to TodoList)
  toggleCompleted(taskId) {
    console.log('toggleCompleted: ', taskId);
    //update state
    this.setState({
      todoItems: this.state.todoItems.map(task => {
        if (task.id === taskId) {
          return {
            ...task, 
            completed: !task.completed
          };
        }
        return task;
      })
    });
  }

  //class method to clear tasks marks as completed (will be passed down to TodoList)
  clearCompleted = () => {
    console.log('completed items cleared');
    //update state
    this.setState({
      todoItems: this.state.todoItems.filter(item => {
        return !item.purchased;
      })
    });
  };

  //class method to add task (will be passed down to TodoList)
  addTask = taskName => {
    console.log('add task: ', taskName);
    //update state
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {
          task: taskName,
          id: Date.now(), 
          completed: false
      }
      ]
    });
  };
 
  render() {
    console.log('rendering...');
    return (
      <div className ='App'>
        <div className ='header'>
          <h1>To Do List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todoItems={this.state.todoItems}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
