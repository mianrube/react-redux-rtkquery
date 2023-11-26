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
    // setTodos example witout using extraReducers
    // setTodos: (state, { payload }) => {
    //   state.todos = payload;
    //   if (payload.length > 0) {
    //     state.selectedTodo = payload[0];
    //   }
    // },
    setSelectedTodo: (state, action: PayloadAction<Todo>) => {
      state.selectedTodo = action.payload;
    },
    // setSelectedTodo using payload destructuring
    // setSelectedTodoAux: (state, { payload }) => {
    //   state.selectedTodo = payload;
    // },
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
