import React from 'react'


const CreateUser = ({ user, createDisabled, createUser, onFormUpdate }) => {
    return (
        <div className='input-form-container'>
            <h2>Create User</h2>
            <div className='input-fn'>
                <label htmlFor='firstname'>First Name</label>
                <input
                    type='text'
                    onChange={(e) => onFormUpdate(e.target.value, e.target.name)}
                    className='form-control'
                    name='firstname'
                    value={user.firstname}
                    id='firstname'
                    aria-describedby='emailHelp'
                    placeholder='First Name, min 2 chars'
                />
            </div>
            <div className='input-ln'>
                <label htmlFor='lastname'>Last Name</label>
                <input
                    type='text'
                    onChange={(e) => onFormUpdate(e.target.value, e.target.name)}
                    className='form-control'
                    name='lastname'
                    value={user.lastname}
                    id='lastname'
                    placeholder='Last Name, min 2 chars'
                />
            </div>
            <div className='input-em'>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    onChange={(e) => onFormUpdate(e.target.value, e.target.name)}
                    className='form-control'
                    name='email'
                    value={user.email}
                    id='email'
                    aria-describedby='emailHelp'
                    placeholder='Email'
                />
            </div>
            <div className='btn-create'>
                <button type='button' onClick={(e) => createUser(user)} className='btn btn-danger' disabled={createDisabled}>Create</button>
            </div>
        </div>
    )
}

export default CreateUser