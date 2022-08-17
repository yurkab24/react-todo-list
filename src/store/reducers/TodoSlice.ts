import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItemTodo, ITodo } from './types';
import { Filters } from '../../enums';
import { generateUUI, getCurrentTime } from '../../library/functions';

const initialState: ITodo = {
  listTodo: [
    {
      id: generateUUI(),
      title: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      time: getCurrentTime(),
      isDone: true,
    },
    {
      id: generateUUI(),
      title: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, laborum?',
      time: getCurrentTime(),
      isDone: false,
    },
  ],
  filter: Filters.all,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoItem(state, action: PayloadAction<IItemTodo>) {
      state.listTodo.push(action.payload);
    },
    removeTodoItem(state, action: PayloadAction<number>) {
      state.listTodo = state.listTodo.filter((item) => item.id !== action.payload);
    },
    doneTodoItem(state, action: PayloadAction<number>) {
      state.listTodo = state.listTodo.filter((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
        return item;
      });
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export default todoSlice.reducer;
