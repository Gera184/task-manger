import React from "react";
import NewTaskForm from "../forms/NewTaskForm";
import UpdateTaskForm from "../forms/UpdateTaskForm";

const Modal = ({
  addNewTaskHandler,
  selected,
  initialSelected,
  editTaskHandler,
}) => {
  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={initialSelected}
            ></button>
          </div>
          <div class="modal-body">
            {Object.keys(selected).length === 0 ? (
              <NewTaskForm
                addNewTaskHandler={addNewTaskHandler}
                selected={selected}
              />
            ) : (
              <UpdateTaskForm
                editTaskHandler={editTaskHandler}
                selected={selected}
                initialSelected={initialSelected}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
