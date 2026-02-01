import React, { useState } from 'react';
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import './App.css';

const App = () => {
  const initial = {
    id: 0,
    firstname: '',
    lastname: '',
    email: ''
  }

  const [user, setUser] = useState(initial);
  const [users, setUsers] = useState([]);

  const onFormUpdate = (value, name) => {
    setUser({
      ...user,
      id: users.length + 1,
      [name]: value
    });
  }

  const createUser = async (user) => {
    const u = [...users];
    u.push(user);
    setUsers(u);
    setUser(initial);
  }

  const createDisabled = user.firstname.length < 2 || user.lastname.length < 2;

  return (
    <div className='app'>
      <header>
        <h1>React App</h1>
      </header>
      <main>
        <div className='app-container'>
          <CreateUser
            createUser={createUser}
            onFormUpdate={onFormUpdate}
            createDisabled={createDisabled}
            user={user}
          />
          <div className='display-board'>
            <h2>{`Total Users Created: ${users.length}`}</h2>
          </div>
        </div>
        <Users users={users} />
      </main>
      <footer />
    </div>
  );
};

export default App;
