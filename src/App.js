import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>List of Things To Do!</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
