import React from 'react';
import { Map } from 'immutable';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" name="complete" checked={this.props.item.isComplete} onChange={this.handleChange} />
        {this.props.item.title}
        - {String(this.props.item.isComplete)}
      </li>
    )
  }

  handleChange = () => {
    const changed = Map(this.props.item).set('isComplete', !this.props.item.isComplete).toObject();

    this.props.onChange(changed);
  };
}

export default TodoItem;