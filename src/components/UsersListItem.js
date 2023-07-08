import React from 'react';

const UsersListItem = ({ user }) => {
    return (
        <div className='mb-2 bg-20 rounded '>
            <div className='flex p-2 justify-between items-center cursor-pointer'>{user.name}</div>
        </div>
    )
}

export default UsersListItem
