import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {loadGames} from './store/api-actions';
import { createAPI } from './services/api';
import { configureStore } from '@reduxjs/toolkit';

export const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(loadGames());

render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
