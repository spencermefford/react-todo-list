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
          {this.itemsRemaining(this.props.todoItems)}
        </div>
        <div className={filters}>

        </div>
        {this.completedCount(this.props.todoItems) > 0 && <div className={clearCompleted}>Clear completed</div>}
      </div>
    )
  }

  completedCount(todoItems) {
    return todoItems.reduce((sum, item) => {
      return sum + (item.isComplete ? 1 : 0);
    }, 0);
  }

  itemsRemaining = (todoItems) => {
    const singular = 'item';
    const plural = 'items';
    const completedCount = this.completedCount(todoItems);
    const itemsRemaining = todoItems.length - completedCount;

    return `${itemsRemaining} ${itemsRemaining === 1 ? singular : plural} left`;
  };
}

export default TodoFooter;