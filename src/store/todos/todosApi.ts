import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from '../../types/interfaces';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7157/api/v1.0' }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/tasks',
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
