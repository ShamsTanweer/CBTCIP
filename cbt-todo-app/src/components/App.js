import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Task from "./Task";
import CreateArea from "./CreateArea";
import CompletedTask from "./CompletedTask";

function App() {
  // State for active tasks
  const [tasks, setTasks] = useState([]);
  // State for completed tasks
  const [completedTasks, setCompletedTasks] = useState([]);

  // Function to add a new task to the active tasks list
  function addTask(newTask) {
    setTasks(prevTasks => {
      return [...prevTasks, newTask];
    });
  }

  // Function to mark a task as completed
  function completeTask(id) {
    const completedTask = tasks[id];
    // Add the completed task to the completed tasks list
    setCompletedTasks(prevTasks => {
      return [...prevTasks, completedTask];
    });
    // Remove the completed task from the active tasks list
    setTasks(prevTasks => {
      return prevTasks.filter((taskItem, index) => {
        return index !== id;
      });
    });
  }

  // Function to delete a task from either active or completed tasks list
  function deleteTask(id, listType) {
    if (listType === "active") {
      // Delete task from active tasks list
      setTasks(prevTasks => {
        return prevTasks.filter((taskItem, index) => {
          return index !== id;
        });
      });
    } else if (listType === "completed") {
      // Delete task from completed tasks list
      setCompletedTasks(prevTasks => {
        return prevTasks.filter((taskItem, index) => {
          return index !== id;
        });
      });
    }
  }

  return (
    <div className="app-container">
      {/* Header component */}
      <Header />
      <div className="content">
        {/* CreateArea component for adding new tasks */}
        <CreateArea onAdd={addTask} />
        <div className="task-list">
          <h2>Active Tasks</h2>
          {/* Display a message if there are no active tasks */}
          {tasks.length === 0 ? <p>No tasks</p> : tasks.map((taskItem, index) => (
            <Task
              key={index}
              id={index}
              title={taskItem.title}
              date={taskItem.date}
              onComplete={completeTask}
              onDelete={deleteTask}
            />
          ))}
        </div>
        <div className="completed-task-list">
          <h2>Completed Tasks</h2>
          {/* Display a message if there are no completed tasks */}
          {completedTasks.length === 0 ? <p>No completed tasks</p> : completedTasks.map((taskItem, index) => (
            <CompletedTask
              key={index}
              id={index}
              title={taskItem.title}
              date={taskItem.date}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
