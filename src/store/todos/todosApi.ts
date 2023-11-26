import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from '../../types/interfaces';

// baseQuery configuration with bearer token interceptor
// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://localhost:7157/api/v1.0',
//   prepareHeaders: (headers) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

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
