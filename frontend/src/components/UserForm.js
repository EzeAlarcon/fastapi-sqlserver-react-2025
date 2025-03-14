import React, { useState } from 'react';

function UserForm({ addUser }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ nombre, correo });
    setNombre('');
    setCorreo('');
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Agregar Usuario</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <button type="submit">Agregar Usuario</button>
    </form>
  );
}

export default UserForm;
