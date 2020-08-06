import React from "react";

function AddButton() {
  async function sendTask() {
    let input = document.getElementById("task-to-add").value;
    let data = { Title: input };
    const API = "http://51.75.120.145:3000/todo";

    await fetch(API, {
      method: "POST",
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
        value="Submit"
        onClick={sendTask}
      ></input>
    </div>
  );
}

export default AddButton;
