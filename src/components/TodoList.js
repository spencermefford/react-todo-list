import React from 'react';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
import { todoList, mainTitle } from './Main.css';
import { List } from 'immutable';
import filtersMap from '../constants/filters';

class TodoList extends React.Component {
  state = {
    todoItems: [],
    currentFilter: filtersMap.ALL,
  };

  render() {
    const todoItems = this.state.todoItems.map((item) => {
      return <TodoItem key={item.id} item={item} onChange={this.handleItemChange} onDelete={this.handleItemDelete} />
    });

    return (
      <div>
        <div className={mainTitle + ' ui header huge'}>todos</div>
        <div className={todoList}>
          <TodoInput onChange={this.handleInputChange} onToggleAll={this.handleToggleAll}/>

          <ul>
            {todoItems}
          </ul>

          {this.state.todoItems.length > 0 &&
            <TodoFooter
              todoItems={this.state.todoItems}
              onClearCompleted={this.handleClearCompleted}
              currentFilter={this.state.currentFilter}
              onFilterChange={this.handleFilterChange}
            />
          }
        </div>
      </div>
    )
  }

  handleInputChange = (value) => {
    const item = {
      id: new Date().getTime(),
      title: value,
      isComplete: false,
    };

    this.setState({ todoItems: [...this.state.todoItems, item] });
  };

  handleItemChange = (item) => {
    const todoItems = List(this.state.todoItems);
    const index = todoItems.findIndex(i => i.id === item.id);

    this.setState({ todoItems: todoItems.set(index, item).toArray() });
  };

  handleItemDelete = (item) => {
    const todoItems = List(this.state.todoItems);
    const index = todoItems.findIndex(i => i.id === item.id);

    this.setState({ todoItems: todoItems.delete(index).toArray() });
  };

  handleToggleAll = (isChecked) => {
    const todoItems = List(this.state.todoItems);
    const mapped = todoItems.map((item) => {
      item.isComplete = isChecked;
      return item;
    });

    this.setState({ todoItems: mapped.toArray() });
  };

  handleClearCompleted = () => {
    const todoItems = List(this.state.todoItems);
    const filtered = todoItems.filter((item) => item.isComplete !== true);

    this.setState({ todoItems: filtered.toArray() });
  };

  handleFilterChange = (filter) => {
    this.setState({ currentFilter: filter });
  };
}

export default TodoList;