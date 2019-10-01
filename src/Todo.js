import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  render() {
    return (
      <li className="Todo">
        <p>{this.props.todo.task}
          <button onClick={() => this.props.handleDelete(this.props.todo.id)}>X</button>
          <button onClick={() => this.props.toggleEdit(this.props.todo.id)}>Edit</button>
        </p>
      </li>
    );
  }
}

export default Todo;
