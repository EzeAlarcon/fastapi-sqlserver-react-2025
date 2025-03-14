import React from 'react';

function UserList({ users }) {
  return (
    <div className="user-list">
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.nombre}</span> - <span>{user.correo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
