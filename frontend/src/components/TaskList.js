import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id} className={task.completed ? 'completed' : ''}>
              <span>{task.title}</span>
              <div className="actions">
                <button onClick={() => editTask(task)}>Edit</button>
                <button onClick={() => deleteTask(task._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
