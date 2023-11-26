import { configureStore } from '@reduxjs/toolkit';

import { todosSlice } from './todos/todosSlice';
import { todosApi } from './todos/todosApi';

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
