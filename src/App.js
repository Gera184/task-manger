import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Main from "./pages/main/Main";
import { fetchTesks } from "./redux/actions/tasksActions";

export default () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    const dataGetItem = JSON.parse(localStorage.getItem("tasks"));
    if (dataGetItem) {
      dispatch(fetchTesks(dataGetItem));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to={"/home"} />
          </Route>
          <Route exact path="/home">
            <Main tasks={tasks} />
          </Route>
          <Route exact path="*">
            <h1 className="text-center">404 Page not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
