import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function CompletedTask(props) {
  // Handler function for deleting a completed task
  function handleDelete() {
    // Calls the onDelete function passed via props with the task's id and type as "completed"
    props.onDelete(props.id, "completed");
  }

  return (
    <div className="task">
      {/* Display the title of the completed task */}
      <h3>{props.title}</h3>
      {/* Display the date when the task was completed */}
      <p>{props.date}</p>
      <div className="task-buttons">
        {/* Button to delete the completed task */}
        <button onClick={handleDelete}>
          {/* Delete icon from Material-UI */}
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default CompletedTask;
