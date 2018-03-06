import React from 'react';
import { Map } from 'immutable';
import { todoItem, todoItemLabel, todoItemDelete } from './Main.css';

class TodoItem extends React.Component {
  render() {
    return (
      <li className={todoItem}>
        <input type="checkbox" name="complete" checked={this.props.item.isComplete} onChange={this.handleChange} />
        &nbsp;
        <span className={todoItemLabel}>{this.props.item.title}</span>
        &nbsp;
        <span className={todoItemDelete} onClick={this.handleDelete}>X</span>
      </li>
    )
  }

  handleChange = () => {
    const changed = Map(this.props.item).set('isComplete', !this.props.item.isComplete).toObject();
    this.props.onChange(changed);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.item);
  };
}

export default TodoItem;