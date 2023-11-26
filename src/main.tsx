import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from './App.tsx';
import { SelectedTodo } from './SelectedTodo.tsx';

import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <hr />
      <SelectedTodo />
    </Provider>
  </React.StrictMode>,
);
