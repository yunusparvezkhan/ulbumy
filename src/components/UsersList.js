import React, { useEffect, useState } from 'react';
import { fetchUsers, addUser } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import SkeletonLoader from './SkeletonLoader';
import Button from './Button'

const UsersList = () => {

    const [laodingUsers, setLoadingUsers] = useState(false);
    const [loadingUsersErr, setLoadingUsersErr] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    const { data, isLoading, err } = useSelector((state) => {
        return state.users;
    })

    const renderUsers = data.map((user) => {
        return (
            <div className='mb-2 bg-20 rounded '>
                <div key={user.id} className='flex p-2 justify-between items-center cursor-pointer'>{user.name}</div>
            </div>
        )
    })

    const renderError = () => {
        console.log(err.message)
        return (
            <div>
                <label>{err.message}</label>
            </div>
        )
    }

    const handleAddUser = () => {
        dispatch(addUser());
    }

    return (
        <div>
            <div className='flex flex-row justify-between m-3 items-center' >
                <label className='text-xl font-bold' >Users</label>
                <Button primary onClick={handleAddUser}>+ Add User</Button>
            </div>
            <div>
                {isLoading ? <SkeletonLoader times={5} heightNwidth='h-10 w-full' /> : renderUsers}
                {err ? renderError() : ''}
            </div>
        </div>
    )
}

export default UsersList