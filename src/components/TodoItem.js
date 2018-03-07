import React from 'react';
import { Map } from 'immutable';
import {todoItem, todoItemLabel, todoItemDelete, todoInputForm} from './Main.css';

class TodoItem extends React.Component {
  state = {
    isEditMode: false,
  };

  componentDidUpdate = () => {
    if (this.state.isEditMode) {
      const node = this.input;
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  };

  render() {
    return (
      <li className={todoItem} onDoubleClick={this.handleDoubleClick}>
        <input type="checkbox" name="complete" checked={this.props.item.isComplete} onChange={this.handleCheckboxChange} />
        &nbsp;
        {this.renderLabelOrInput()}
        &nbsp;
        <span className={todoItemDelete} onClick={this.handleDelete}>X</span>
      </li>
    )
  }

  handleDoubleClick = () => {
    this.setState({ isEditMode: true });
  };

  handleCheckboxChange = () => {
    const changed = Map(this.props.item).set('isComplete', !this.props.item.isComplete).toObject();
    this.props.onChange(changed);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.item);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const changed = Map(this.props.item).set('title', this.input.value).toObject();

    this.props.onChange(changed);
    this.setState({ isEditMode: false });
  };

  renderLabelOrInput = () => {
    if (this.state.isEditMode === true) {
      return (
        <form className={todoItemLabel} onSubmit={this.handleSubmit}>
          <input type="text" defaultValue={this.props.item.title} ref={(input) => this.input = input} />
        </form>
      );
    } else {
      return <span className={todoItemLabel}>{this.props.item.title}</span>;
    }
  };
}

export default TodoItem;