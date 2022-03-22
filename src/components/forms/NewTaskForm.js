import React, { useState } from "react";

const NewTaskForm = ({ addNewTaskHandler, selected }) => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100) + 5;

    addNewTaskHandler({
      id: id,
      title: description,
      date: date,
      completed: false,
    });
    setDescription("");
    setDate("");
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

      <div class="mb-3">
        <label class="form-label">Date</label>
        <input
          type="date"
          class="form-control"
          id="exampleInputDate"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="text-center">
        {description && date ? (
          <button
            type="submit"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Submit
          </button>
        ) : (
          <p style={{ color: "gray" }}>Fill all the inputs please </p>
        )}
      </div>
    </form>
  );
};

export default NewTaskForm;
