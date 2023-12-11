import { useDispatch, useSelector } from 'react-redux';
import { toggleTask, deleteTask } from '../slices/todosSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  const handleToggleTask = (todoId) => {
    dispatch(toggleTask(todoId));
  };

  const handleDeleteTask = (todoId) => {
    dispatch(deleteTask(todoId));
  };

  return (
    <ul>
      {todo.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTask(todo.id)}
          />
          <span >
            {todo.text}
          </span>
          <span className={todo.className}>{todo.className}</span>
          <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
