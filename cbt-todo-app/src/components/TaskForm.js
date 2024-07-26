import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask = { text: taskText, createdAt: new Date(), completedAt: null };
      addTask(newTask);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Enter new task" 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
