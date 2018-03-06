import React from 'react';
import _ from 'lodash';
import { todoFooter, itemsRemaining, filters, clearCompleted, active } from './Main.css';
import filtersMap from '../constants/filters';

class TodoFooter extends React.Component {
  render() {
    const filterList = _.map(filtersMap, (value, key) => {
      return (
        <div
          key={key}
          className={this.props.currentFilter === value ? active : ''}
          onClick={this.handleFilterChange.bind(this, value)}
        >
          {value.label}
        </div>
      );
    });

    return (
      <div className={todoFooter}>
        <div className={itemsRemaining}>
          {this.itemsRemaining(this.props.todoItems)}
        </div>
        <div className={filters}>
          {filterList}
        </div>
        {this.completedCount(this.props.todoItems) > 0 && <div className={clearCompleted} onClick={this.handleClearCompleted}>Clear completed</div>}
      </div>
    )
  }

  handleFilterChange(filter) {
    this.props.onFilterChange(filter);
  }

  handleClearCompleted = () => {
    this.props.onClearCompleted();
  };

  completedCount = (todoItems) => {
    return todoItems.reduce((sum, item) => {
      return sum + (item.isComplete ? 1 : 0);
    }, 0);
  };

  itemsRemaining = (todoItems) => {
    const singular = 'item';
    const plural = `${singular}s`;
    const completedCount = this.completedCount(todoItems);
    const itemsRemaining = todoItems.length - completedCount;

    return `${itemsRemaining} ${itemsRemaining === 1 ? singular : plural} left`;
  };
}

export default TodoFooter;