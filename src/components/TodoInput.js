import React from 'react';
import {todoInput} from './Main.css';

class TodoInput extends React.Component {
  state = {
    value: '',
    isToggleChecked: false,
  };

  render() {
    return (
      <div className={todoInput}>
        <form onSubmit={this.handleSubmit}>
          <input type="checkbox" checked={this.state.isToggleChecked} onChange={this.handleToggleChange} />
          <input type="text" value={this.state.value} onChange={this.handleInputChange} placeholder="What needs to be done today?" />
        </form>
      </div>
    )
  }

  handleToggleChange = () => {
    const isToggleChecked = !this.state.isToggleChecked;

    this.props.onToggleAll(isToggleChecked);
    this.setState({ isToggleChecked });
  };

  handleInputChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onChange(this.state.value);
    this.setState({ value: '' });
  };
}

export default TodoInput;