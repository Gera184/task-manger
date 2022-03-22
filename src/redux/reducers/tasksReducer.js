import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    selectedTask: {},
  },
  reducers: {
    fetchTasks(state, action) {
      state.tasks = action.payload;
    },
    addNewTask(state, action) {
      const newTask = action.payload;
      state.tasks.push(newTask);
    },
    deleteTask(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    selectedTask(state, action) {
      state.selectedTask = action.payload;
    },
    initSelected(state) {
      state.selectedTask = {};
    },
    editTask(state, action) {
      const index = action.payload.index;
      state.tasks[index] = action.payload;
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
