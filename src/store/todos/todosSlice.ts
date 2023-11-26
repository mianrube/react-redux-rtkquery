import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { todosApi } from './';
import { Todo } from '../../types/interfaces';

export interface TodosState {
  todos: Todo[];
  selectedTodo: Todo | null;
}

const initialState: TodosState = {
  todos: [],
  selectedTodo: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setSelectedTodo: (state, action: PayloadAction<Todo>) => {
      state.selectedTodo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      todosApi.endpoints.getTodos.matchFulfilled,
      (state, { payload }) => {
        state.todos = payload;
      },
    );
  },
});

export const { setSelectedTodo } = todosSlice.actions;
