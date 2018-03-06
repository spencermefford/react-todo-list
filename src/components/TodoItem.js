import React from 'react';
import { Map } from 'immutable';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" name="complete" checked={this.props.item.isComplete} onChange={this.handleChange} />
        &nbsp;
        {this.props.item.title}
        &nbsp;
        <span onClick={this.handleDelete}>Delete</span>
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