import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const API_URL = "http://62.72.3.141:8001"; // URL del backend

function App() {
  const [users, setUsers] = useState([]); // Estado para almacenar la lista de usuarios

  // Obtener la lista de usuarios al cargar el componente
  useEffect(() => {
    fetchUsers();

    // Conectar al WebSocket
    const socket = new WebSocket('ws://62.72.3.141:8001/ws');

    // Escuchar mensajes del WebSocket
    socket.onmessage = (event) => {
      const newUser = JSON.parse(event.data);
      setUsers((prevUsers) => [...prevUsers, newUser]); // Agregar el nuevo usuario al estado
    };

    // Limpiar el WebSocket cuando el componente se desmonte
    return () => {
      socket.close();
    };
  }, []);

  // Función para obtener la lista de usuarios desde el backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data); // Actualizar el estado con los usuarios obtenidos
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  // Función para agregar un nuevo usuario
  const addUser = async (user) => {
    try {
      const response = await axios.post(`${API_URL}/users`, user);
      setUsers((prevUsers) => [...prevUsers, response.data]); // Agregar el nuevo usuario al estado
    } catch (error) {
      console.error('Error al agregar el usuario:', error);
    }
  };

  return (
    <div className="container">
      <h1>Gestión de Usuarios</h1>
      <UserForm addUser={addUser} /> {/* Pasar la función addUser como prop */}
      <UserList users={users} /> {/* Pasar la lista de usuarios como prop */}
    </div>
  );
}

export default App;
