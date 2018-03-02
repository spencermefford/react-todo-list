import React from 'react';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoActions from "./TodoActions";
import {todoList, mainTitle} from './Main.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ([
      <div key={1} className={mainTitle + ' ui header huge'}>Todo List</div>,
      <div key={2} className={todoList}>
        <TodoInput/>
        <ul>
          <TodoItem/>
        </ul>
        <TodoActions/>
      </div>
    ])
  }
}

export default TodoList;