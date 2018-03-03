import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.item.title}
      </li>
    )
  }
}

export default TodoItem;