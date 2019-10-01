import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
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
    this.props.dispatch({ type: "ADD", payload: { ...this.state, id: uuid(), edit: false } });
    this.setState({
      task: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>New Task: </label>
        <input
          type="text"
          name="task"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button>Add Task!</button>
      </form>
    )
  }
}

export default connect()(AddTodoForm);
