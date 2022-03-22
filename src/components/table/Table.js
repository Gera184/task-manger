import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import "./Table.css";

const Table = ({
  tasks,
  tableConfig,
  deleteTaskHandler,
  selectedTaskHandler,
  sortedTasks,
}) => {
  const [asc, setAsc] = useState(false);

  return (
    <div className="container table-responsive-xxl">
      <table class="table  text-center table-striped table-hover ">
        <thead>
          <tr class="table-dark ">
            {tableConfig.map((v, index) => (
              <th key={index} scope="col">
                {v.title}
                {v.title === "Date" && (
                  <>
                    {" "}
                    {asc ? (
                      <AiOutlineArrowUp
                        onClick={() => {
                          sortedTasks("ascending");
                          setAsc((prevState) => !prevState);
                        }}
                      />
                    ) : (
                      <AiOutlineArrowDown
                        onClick={() => {
                          sortedTasks("descending");
                          setAsc((prevState) => !prevState);
                        }}
                      />
                    )}
                  </>
                )}
              </th>
            ))}
            <th scope="col">
              <button
                className="btn btn-primary new-task-btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Add new Task +
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{task.completed ? <FcCheckmark /> : <FcCancel />}</td>
              <td>{task.title} </td>
              <td className="date-td"> {task.date}</td>
              <td>
                <FaRegTrashAlt
                  onClick={() => {
                    deleteTaskHandler({
                      id: task.id,
                      title: task.description,
                      date: task.date,
                      completed: task.completed,
                    });
                  }}
                />{" "}
                <FiEdit
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => {
                    selectedTaskHandler({ task, index });
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
