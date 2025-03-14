import React, { useState } from 'react';

function UserList({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewUser = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th className="actions">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.correo}</td>
              <td className="actions">
                <button onClick={() => handleViewUser(user)}>👁️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <div className={`modal ${selectedUser ? 'open' : ''}`}>
        <div className="modal-content">
          <h3>Detalles del Usuario</h3>
          {selectedUser && (
            <>
              <p><strong>Nombre:</strong> {selectedUser.nombre}</p>
              <p><strong>Correo:</strong> {selectedUser.correo}</p>
            </>
          )}
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

export default UserList;
