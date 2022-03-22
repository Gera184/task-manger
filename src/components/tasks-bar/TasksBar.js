import React from "react";
import "./TaskBar.css";

const TasksBar = ({ tasks, sortedTasks }) => {
  let taskStatus = {
    total: tasks.length,
    completed: 0,
    uncompleted: 0,
  };

  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].completed) {
      taskStatus.completed++;
    } else {
      taskStatus.uncompleted++;
    }
  }

  return (
    <div className="container  p-3">
      <div className="row">
        <div className="col-md-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              value="Total tasks"
              disabled={true}
            />
            <button
              class="btn btn-dark"
              type="button"
              onClick={() => {
                sortedTasks("totalTasks");
              }}
            >
              <strong className="total">{taskStatus.total}</strong>
            </button>
          </div>
        </div>
        <div className="col-md-4 completed-col ">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              value="Tasks Completed"
              disabled={true}
            />
            <button
              class="btn btn-dark"
              type="button"
              onClick={() => {
                sortedTasks("completed");
              }}
            >
              <strong className="completed">{taskStatus.completed}</strong>
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              value="Tasks Remaning"
              disabled={true}
            />
            <button
              class="btn btn-dark"
              type="button"
              onClick={() => {
                sortedTasks("uncompleted");
              }}
            >
              <strong className="uncompleted">{taskStatus.uncompleted}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksBar;
