import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo } from '../../actions/todo_actions';



const MapStateToProps = ( state ) => ({
  todos: allTodos(state),
  state
});

const MapDispatchToProps = ( dispatch ) => ({ // v3
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: () => dispatch(receiveTodos()),
  removeTodo: (todo) => dispatch(removeTodo(todo))

});

export default connect(MapStateToProps, MapDispatchToProps)(TodoList);
