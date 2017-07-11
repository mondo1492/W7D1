import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos} from '../../actions/todo_actions';



const MapStateToProps = ( state ) => ({
  todos: allTodos(state),
  state
});

const MapDispatchToProps = ( dispatch ) => ({ // v3
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: () => dispatch(receiveTodos())

});

export default connect(MapStateToProps, MapDispatchToProps)(TodoList);
