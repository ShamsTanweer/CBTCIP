import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

function Task(props) {
  // Handler function for marking a task as complete
  function handleComplete() {
    // Calls the onComplete function passed via props with the task's id
    props.onComplete(props.id);
  }

  // Handler function for deleting a task
  function handleDelete() {
    // Calls the onDelete function passed via props with the task's id and type as "active"
    props.onDelete(props.id, "active");
  }

  return (
    <div className="task">
      {/* Display the title of the task */}
      <h3>{props.title}</h3>
      {/* Display the date of the task */}
      <p>{props.date}</p>
      <div className="task-buttons">
        {/* Button to mark the task as complete */}
        <button onClick={handleComplete}>
          <DoneIcon />
        </button>
        {/* Button to delete the task */}
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Task;
