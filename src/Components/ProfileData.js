import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const ProfileData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          // Make API request using async/await
          const response = await axios.get('http://localhost:5000/api/users');
          const userData = response.data;
          setUsers(userData);
          console.log(userData)
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchUsers();
    }, []);
  

  return (
    <div  style={{height:'100vh',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7a32ad'}}>
    <div>
      <Table striped style={{height:'auto', width: '90vw', margin: 'auto'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date Created</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.date}</td>
          <td>{user.role}</td>
          <td>{user.status}</td>
          <td>{user.action}</td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default ProfileData
