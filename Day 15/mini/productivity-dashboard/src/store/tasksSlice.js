import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString()
      });
    },
    toggleTask: (state, action) => {
      const task = state.items.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    setTasks: (state, action) => {
      state.items = action.payload;
    }
  }
});

export const { addTask, toggleTask, deleteTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;