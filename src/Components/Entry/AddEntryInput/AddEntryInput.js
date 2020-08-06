import React from "react";
import AddButton from "./AddButton/AddButton";

function AddEntryInput() {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Task to add
        </span>
      </div>
      <input
        id="task-to-add"
        type="text"
        className="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
      <AddButton />
    </div>
  );
}

export default AddEntryInput;
