import React from "react";
import ReactDOM from "react-dom";
import EditEntry from "../../../Entry/EditEntry/EditEntry";
import "./TaskButtons.css";

async function deleteTask(event) {
  let idToDelete = event.target.id;
  await fetch("http://51.75.120.145:3000/todo/" + idToDelete, {
    method: "DELETE",
  });
  console.log(idToDelete);
  window.location.reload();
}

async function editTask(event) {
  let idToEdit = event.target.id;
  ReactDOM.render(
    <EditEntry id={idToEdit} />,
    document.getElementById("task_" + idToEdit)
  );
}

async function setStatus(id, status) {
  status = status ? false : true;
  let data = { extra: status };
  await fetch("http://51.75.120.145:3000/todo/" + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  window.location.reload();
}

function TaskButtons({ id, extra }) {
  let checked = extra == "1" ? true : false;
  return (
    <div className="task-buttons">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            setStatus(id, checked);
          }}
        />
        &nbsp; is done
      </label>

      <button
        id={id}
        type="button"
        className="btn btn-outline-primary"
        onClick={editTask}
      >
        Edit
      </button>
      <button
        id={id}
        type="button"
        className="btn btn-danger"
        onClick={deleteTask}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskButtons;
