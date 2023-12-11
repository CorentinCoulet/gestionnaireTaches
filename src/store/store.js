import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../slices/todosSlice';

const store = configureStore({
  reducer: {
    todo: tasksReducer,
  },
});

export default store;