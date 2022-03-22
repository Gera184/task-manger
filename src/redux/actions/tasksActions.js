import { tasksActions } from "../reducers/tasksReducer.js";

export const fetchTesks = (tasks) => {
  return (dispatch) => {
    dispatch(tasksActions.fetchTasks(tasks));
  };
};

export const addNewTask = (task) => {
  return (dispatch) => {
    dispatch(tasksActions.addNewTask(task));
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    dispatch(tasksActions.deleteTask(id));
  };
};

export const editTask = (task) => {
  return (dispatch) => {
    dispatch(tasksActions.editTask(task));
  };
};

export const selectedTask = (selectedTask) => {
  return (dispatch) => {
    dispatch(tasksActions.selectedTask(selectedTask));
  };
};

export const initSelected = () => {
  return (dispatch) => {
    dispatch(tasksActions.initSelected());
  };
};
