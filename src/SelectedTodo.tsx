import { useAppSelector } from './store';

export const SelectedTodo = () => {
  const { selectedTodo } = useAppSelector((state) => state.todos);

  return (
    <div>
      <h1>Selected Todo:</h1>
      <p>Id: {selectedTodo?.id}</p>
      <p>Title: {selectedTodo?.title}</p>
      <p>Description: {selectedTodo?.description}</p>
    </div>
  );
};
