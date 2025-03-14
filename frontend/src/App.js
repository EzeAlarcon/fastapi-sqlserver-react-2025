import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const API_URL = "http://localhost:8001";
const socket = io(API_URL);

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
    socket.on('nuevo_usuario', (newUser) => {
      setUsers((prevUsers) => [...prevUsers, newUser]);
    });
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    setUsers(response.data);
  };

  const addUser = async (user) => {
    await axios.post(`${API_URL}/users`, user);
  };

  return (
    <div className="container">
      <h1>Gestión de Usuarios</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
