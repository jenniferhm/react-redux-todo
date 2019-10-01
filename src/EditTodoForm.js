import React from 'react';
import { connect } from 'react-redux';

class EditTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTask: this.props.todo.task,
      id: this.props.id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.dispatch({ type: "UPDATE", payload: this.state });
    this.setState({
      editTask: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Edit Task: </label>
        <input
          type="text"
          name="editTask"
          onChange={this.handleChange}
          value={this.state.editTask}
        />
        <button>Update Task!</button>
      </form>
    )
  }
}

export default connect()(EditTodoForm);
