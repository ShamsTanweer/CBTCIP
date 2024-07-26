import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  // State to manage the task input
  const [task, setTask] = useState({
    title: "",
    date: ""
  });

  // Handle changes to the input field
  function handleChange(event) {
    const { value } = event.target;

    // Update the task state with the new title and the current date
    setTask({
      title: value,
      date: new Date().toLocaleString()
    });
  }

  // Handle the submission of a new task
  function submitTask(event) {
    // Prevent adding empty tasks
    if (task.title.trim() === "") return;
    
    // Pass the new task to the parent component
    props.onAdd(task);
    
    // Reset the task state
    setTask({
      title: "",
      date: ""
    });
    
    // Prevent the default form submission behavior
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-task">
        {/* Input field for adding a new task */}
        <input
          name="title"
          onChange={handleChange}
          value={task.title}
          placeholder="Add a new task..."
        />
        <Zoom in={true}>
          {/* Floating action button to submit the new task */}
          <Fab onClick={submitTask}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
