import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const { text, priority } = action.payload;
      const className = priority === 'Rouge' ? 'urgent' : 'pas-urgent';
      state.push({ 
        id: Date.now(), 
        text, 
        priority,
        completed: false,
        className,
      });
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
