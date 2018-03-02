import React from 'react';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoActions from "./TodoActions";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoInput/>
        <ul>
          <TodoItem/>
        </ul>
        <TodoActions/>
      </div>
    )
  }
}

export default TodoList;