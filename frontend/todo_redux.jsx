import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;


  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
    // <Root store={store}/>,
