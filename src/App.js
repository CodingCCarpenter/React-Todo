import React from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
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

  //class method that will be passed down to TodoList
  toggleCompleted(taskId) {
    console.log('toggleCompleted: ', taskId);

    this.setState({
      todoItems: this.state.data.map(task => {
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
 
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
