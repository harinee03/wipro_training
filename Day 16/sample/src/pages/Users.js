
// src/pages/Users.js
import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')



      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }
, []);


  return (
    <div className="container mt-4">
      <h1 className="mb-4">Users</h1>
      <div className="row">
        {users.map(user => (
          <div key={user.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <p className="card-text">{user.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;