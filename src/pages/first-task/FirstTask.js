import React from "react";
import { BsPencilSquare } from "react-icons/bs";

const FirstTask = () => {
  return (
    <div className="container pt-5 text-center">
      <div className="row">
        <div className="col">
          <h1>
            Add your first task <BsPencilSquare />
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col pt-2">
          <button
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstTask;
