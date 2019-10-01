import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import uuid from 'uuid/v4';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  handleDelete(id) {
    this.props.dispatch({ type: "DELETE", payload: id });
  }

  toggleEditForm(todoId) {
    this.props.dispatch({type: "TOGGLE", payload: todoId});
  }

  render() {
    return (
      <div className="TodoList">
        <ul>
          {this.props.todos.map(todo => (
            <React.Fragment key={uuid()}>
              <Todo todo={todo} key={todo.id} handleDelete={this.handleDelete} toggleEdit={this.toggleEditForm} />
              {todo.edit ? <EditTodoForm key={uuid()} id={todo.id} todo={todo} /> : null}
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList);