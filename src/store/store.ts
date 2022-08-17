import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducers from './reducers/TodoSlice';

const rootReducers = combineReducers({
  todoReducers,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
