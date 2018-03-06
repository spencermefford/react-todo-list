import React from 'react';
import {todoInput} from './Main.css';

class TodoInput extends React.Component {
  state = {
    value: ''
  };

  render() {
    return (
      <div className={todoInput}>
        <form onSubmit={this.handleSubmit}>
          <div onClick={this.props.onToggleAll}>Toggle All</div>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="What needs to be done today?" />
        </form>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onChange(this.state.value);
    this.setState({ value: '' });
  };
}

export default TodoInput;