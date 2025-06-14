import './UserList.css'
import React from 'react'

function UserList(){
    const users = [
        {id: 1, name: 'Alice', age: 25},
        {id: 2, name: 'Nathan', age: 26},
        {id: 3, name: 'DiMaria', age: 27}
    ];

    return(
        <div>
        <h2>User List</h2>
        <div className='user-container'>
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default UserList