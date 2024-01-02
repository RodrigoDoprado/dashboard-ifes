import layoutReducer from './ducks/layout';
import rootAuth from './ducks/Auth';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    auth: rootAuth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
