import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const todo = this.props.todo;
    console.log(todo);
    return (

    <li>{todo.title}</li>
    );
  }
}

export default TodoListItem;
