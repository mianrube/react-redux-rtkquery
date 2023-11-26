import { useAppDispatch, useAppSelector } from './store';
import { setSelectedTodo, useGetTodosQuery } from './store/todos';
import { Todo } from './types/interfaces';

export const App = () => {
  const dispatch = useAppDispatch();

  const { isLoading } = useGetTodosQuery();
  const { todos } = useAppSelector((state) => state.todos);

  const handleSelectTodo = (todo: Todo) => {
    dispatch(setSelectedTodo(todo));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{' '}
            <button onClick={() => handleSelectTodo(todo)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
