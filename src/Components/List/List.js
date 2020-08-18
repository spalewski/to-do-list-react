import React, { useEffect, useState } from "react";
import Task from "./Task/Task";
import Async from "react-async";

const loadTasks = () => {
  return fetch("http://51.75.120.145:3000/todo");
};

function List() {
  const [todoList, updateTodoList] = useState([]);

  const getAndRenderTodos = () => {
    loadTasks()
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json())
      .then((json) => updateTodoList(json));
  };

  useEffect(() => {
    getAndRenderTodos();
  }, []);

  return (
    <div className="container">
      {todoList.map((task) => {
        return <Task title={task.title} id={task.id} extra={task.extra} loadTasks={getAndRenderTodos} />;
      })}
    </div>
  );
}

export default List;
