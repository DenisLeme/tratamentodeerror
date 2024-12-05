import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  //Erro estava ao passar a função async diretamente no useEffect, não pode ser usada por que é uma promise
  //Criei um const para fazer a função assíncrona dentro do useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error('Error ao buscar usuários')
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
