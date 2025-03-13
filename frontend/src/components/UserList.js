import React from 'react';

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.nombre} - {user.correo}</li>
      ))}
    </ul>
  );
}

export default UserList;
