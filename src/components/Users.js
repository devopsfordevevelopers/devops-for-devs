import React from 'react'

const Users = ({ users }) => {
    const UserRow = (user) => {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    const userTable = users.map((user) => UserRow(user))

    return (
        <div className='table-wrapper'>
            <h2>User List</h2>
            <table className='user-table'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
};
export default Users;