import React, { useState } from "react";

const UpdateTaskForm = ({ editTaskHandler, selected, initialSelected }) => {
  const [description, setDescription] = useState(selected.task.title);
  const [checked, setChecked] = useState(selected.task.completed);
  const checkedHandler = () => setChecked(!checked);

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedTask = {
      index: selected.index,
      id: selected.task.id,
      title: description,
      date: selected.task.date,
      completed: checked,
    };

    editTaskHandler(updatedTask);

    initialSelected();
  };

  return (
    <form onSubmit={submitHandler}>
      <div class="mb-3">
        <label class="form-label">Task description</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputTask"
          aria-describedby="taskHelp"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          checked={checked}
          onChange={checkedHandler}
        />
        <label class="form-check-label">Status</label>
      </div>

      <div className="text-center">
        <button
          type="submit"
          class="btn btn-primary"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateTaskForm;
