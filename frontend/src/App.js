import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import taskService from './services/TaskService';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await taskService.getTasks();
    setTasks(data);
  };

  const addTask = async (task) => {
    await taskService.createTask(task);
    fetchTasks();
  };

  const updateTask = async (id, updatedTask) => {
    await taskService.updateTask(id, updatedTask);
    setTaskToEdit(null);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await taskService.deleteTask(id);
    fetchTasks();
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} taskToEdit={taskToEdit} updateTask={updateTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
