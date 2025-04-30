import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask, taskToEdit, updateTask }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    } else {
      setTitle('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (taskToEdit) {
      updateTask(taskToEdit._id, { title });
    } else {
      addTask({ title });
    }
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">{taskToEdit ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
