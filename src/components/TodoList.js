import React from 'react';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoActions from "./TodoActions";
import {todoList, mainTitle} from './Main.css';

class TodoList extends React.Component {
  state = {
    todoItems: [],
  };

  handleChange = (value) => {
    this.setState({ todoItems: this.state.todoItems.concat(value) });
  };

  render() {
    return (
      <div>
        <div key={1} className={mainTitle + ' ui header huge'}>Todo List</div>
        <div key={2} className={todoList}>
          <TodoInput onChange={this.handleChange}/>

          <ul>
            <TodoItem/>
          </ul>

          <TodoActions/>
        </div>
      </div>
    )
  }
}

export default TodoList;