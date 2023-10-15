import {createSlice} from '@reduxjs/toolkit';
const initialState = {tasks: []};

const TaskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks = [...state.tasks, action?.payload];
    },
    markComplete(state, action) {
      const {id} = action.payload;
      state.tasks = state.tasks.map(task => {
        return task.id === id ? {...task, isComplete: !task?.isComplete} : task;
      });
    },
    deleteTask(state, action) {
      const {id} = action.payload;
      console.log(id)
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
  },
});

export const {addTask, markComplete, deleteTask} = TaskSlice.actions;

export default TaskSlice.reducer;
