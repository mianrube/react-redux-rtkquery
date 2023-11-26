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
        // Set the first todo as the selected todo
        // if (payload.length > 0) {
        //   state.selectedTodo = payload[0];
        // }
      },
    );
  },
});

export const { setSelectedTodo } = todosSlice.actions;
