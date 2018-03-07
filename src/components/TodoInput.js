import React from 'react';
import { todoInputForm, toggleAllInput, todoInput } from './Main.css';

class TodoInput extends React.Component {
  state = {
    value: '',
    isToggleChecked: false,
  };

  componentDidMount() {
    document.getElementById('input-form').querySelector('input[type="text"]').focus(); // Focus the form element
  }

  render() {
    return (
      <form id='input-form' onSubmit={this.handleSubmit} className={todoInputForm}>
        <div className={toggleAllInput}>
          <input type="checkbox" checked={this.state.isToggleChecked} onChange={this.handleToggleChange} />
        </div>
        <div className={todoInput}>
          <input type="text" value={this.state.value} onChange={this.handleInputChange} placeholder="What needs to be done?" />
        </div>
      </form>
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

    const value = this.state.value;

    if (value.length > 0) {
      this.props.onChange(value.trim());
      this.setState({ value: '' });
    }
  };
}

export default TodoInput;