import React from "react";

function EditButton({ id }) {
  async function sendTask() {
    let input = document.getElementById("task-to-edit").value;
    let data = {
      Title: input,
      id: id,
    };
    const API = "http://51.75.120.145:3000/todo/" + id;

    await fetch(API, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => this.setState({ error, isLoading: false }));
    window.location.reload();
  }

  return (
    <div>
      <input
        className="btn btn-primary"
        type="submit"
        value="Update"
        onClick={sendTask}
      ></input>
    </div>
  );
}

export default EditButton;
