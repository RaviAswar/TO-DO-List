import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

const createTask = async (task) => {
  const response = await axios.post(`${API_URL}/task`, task);
  return response.data;
};

const updateTask = async (id, updatedTask) => {
  const response = await axios.put(`${API_URL}/task/${id}`, updatedTask);
  return response.data;
};

const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/task/${id}`);
  return response.data;
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
