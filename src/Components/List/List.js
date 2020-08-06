import React from "react";
import Task from "./Task/Task";
import Async from "react-async";

const loadTasks = () =>
  fetch("http://51.75.120.145:3000/todo")
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

function List() {
  return (
    <div className="container">
      <Async promiseFn={loadTasks}>
        {({ data, err, isLoading }) => {
          if (isLoading) return "Loading...";
          if (err) return `Something went wrong: ${err.message}`;
          return data.map((task) => {
            return <Task title={task.title} id={task.id} extra={task.extra} />;
          });
        }}
      </Async>
    </div>
  );
}

export default List;
