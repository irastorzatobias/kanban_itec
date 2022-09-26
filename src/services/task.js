import axios from 'axios';

const URL = 'http://localhost:3004';

const getTasks = async () => {
  const response = await axios.get(`${URL}/tasks`);

  return response.data;
};

const postTask = async (task) => {
  const response = await axios.post(`${URL}/tasks`, task);

  return response.data;
};

const eraseTask = async (id) => {
  const response = await axios.delete(`${URL}/tasks/${id}`);

  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTasks, postTask, eraseTask };
