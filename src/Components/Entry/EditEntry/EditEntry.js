import React from 'react';
import EditButton from "./EditButton/EditButton";
import './EditEntry.css'

function EditEntry({id}){

  return (
    <div className="input-group mb-3 task-edit-container">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Task to edit
        </span>
      </div>
      <input
        id="task-to-edit"
        type="text"
        className="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
      <EditButton id={id}/>
    </div>
  );
}

export default EditEntry;
