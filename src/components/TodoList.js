import React from 'react';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoActions from "./TodoActions";
import { todoList, mainTitle } from './Main.css';
import { List } from 'immutable';

class TodoList extends React.Component {
  state = {
    todoItems: [],
  };


  render() {
    const todoItems = this.state.todoItems.map((item) => {
      return <TodoItem key={item.id} item={item} onChange={this.handleItemChange} />
    });

    return (
      <div>
        <div className={mainTitle + ' ui header huge'}>Todo List</div>
        <div className={todoList}>
          <TodoInput onChange={this.handleInputChange}/>

          <ul>
            {todoItems}
          </ul>

          <TodoActions/>
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
}

export default TodoList;