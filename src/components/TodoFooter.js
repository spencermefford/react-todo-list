import React from 'react';
import { todoFooter, itemsRemaining, filters, clearCompleted } from './Main.css';

class TodoFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={todoFooter}>
        <div className={itemsRemaining}>
          {this.itemsLeft(this.props.todoItems)}
        </div>
        <div className={filters}>

        </div>
        <div className={clearCompleted}>

        </div>
      </div>
    )
  }

  itemsLeft = (todoItems) => {
    const singular = 'item';
    const plural = 'items';
    const count = todoItems.reduce((sum, item) => {
      return sum + (item.isComplete ? 0 : 1);
    }, 0);

    return `${count} ${count === 1 ? singular : plural} left`;
  };
}

export default TodoFooter;