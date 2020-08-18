import React from "react";
import "./Task.css";
import TaskButtons from "./TaskButtons/TaskButtons";

function Task({ title, id, extra, loadTasks }) {
  return (
    <div className="container task-container">
      <div className="task" id={"task_" + id}>
        {title}
        {extra}
      </div>
      <TaskButtons id={id} extra={extra} loadTasks={loadTasks}/>
    </div>
  );
}

export default Task;
