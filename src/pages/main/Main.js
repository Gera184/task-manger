import React, { useState, useEffect } from "react";
import "./Main.css";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import Table from "../../components/table/Table";
import Modal from "../../components/modal/Modal";
import {
  addNewTask,
  deleteTask,
  editTask,
  initSelected,
  selectedTask,
} from "../../redux/actions/tasksActions";
import FirstTask from "../first-task/FirstTask";
import TasksBar from "../../components/tasks-bar/TasksBar";

const Main = ({ tasks }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [updatedTasks, setUpdatedTasks] = useState([]);
  const selected = useSelector((state) => state.tasks.selectedTask);
  const tableConfig = [
    {
      title: "#",
    },
    {
      title: "Status",
    },
    {
      title: "Task",
    },
    {
      title: "Date",
    },
  ];

  useEffect(() => {
    setUpdatedTasks(tasks);
  }, [tasks]);

  const addNewTaskHandler = (task) => {
    dispatch(addNewTask(task));
  };

  const deleteTaskHandler = (task) => {
    const taskDate = task.date;
    const given = moment(taskDate, "YYYY-MM-DD");
    const current = moment().startOf("day");
    const daysDiff = Math.floor(moment.duration(given.diff(current)).asDays());

    if (daysDiff <= 6) {
      dispatch(deleteTask(task.id));
    } else {
      alert("wait  " + daysDiff + "  more days before deleting this task  ");
    }
  };

  const selectedTaskHandler = (task) => {
    dispatch(selectedTask(task));
  };

  const initialSelected = () => {
    dispatch(initSelected());
  };

  const editTaskHandler = (task) => {
    dispatch(editTask(task));
  };

  const sortedTasks = (sort) => {
    switch (sort) {
      case "completed":
        return setUpdatedTasks(tasks.filter((task) => task.completed === true));
      case "uncompleted":
        return setUpdatedTasks(
          tasks.filter((task) => task.completed === false)
        );
      case "totalTasks":
        return setUpdatedTasks(tasks);
      case "ascending":
        return setUpdatedTasks(
          [...tasks].sort((a, b) => (b.date < a.date ? 1 : -1))
        );

      case "descending":
        return setUpdatedTasks(
          [...tasks].sort((a, b) => (b.date > a.date ? 1 : -1))
        );
    }
  };

  const filteredQuery = updatedTasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="pt-5 ">
      <TasksBar tasks={tasks} sortedTasks={sortedTasks} />
      <div className="col text-center pb-2">
        <input
          className="search-input"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {tasks.length !== 0 ? (
        <Table
          tableConfig={tableConfig}
          tasks={filteredQuery}
          deleteTaskHandler={deleteTaskHandler}
          selectedTaskHandler={selectedTaskHandler}
          sortedTasks={sortedTasks}
        />
      ) : (
        <FirstTask />
      )}
      <Modal
        addNewTaskHandler={addNewTaskHandler}
        selected={selected}
        initialSelected={initialSelected}
        editTaskHandler={editTaskHandler}
      />
      {filteredQuery.length === 0 && tasks.length !== 0 && (
        <p className="text-center">No tasks were found</p>
      )}
    </div>
  );
};

export default Main;
