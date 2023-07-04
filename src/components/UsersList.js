import React, { useEffect } from 'react';
import { fetchUsers } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import SkeletonLoader from './SkeletonLoader';

const UsersList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    const { data, isLoading, err } = useSelector((state) => {
        return state.users;
    })

    const renderUsers = data.map((user) => {
        return (
            <div className='mb-2 border rounded'>
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

    return (
        <div>
            <label className='text-xl font-bold' >Users</label>
            <div className='mt-5'>
                {isLoading ? <SkeletonLoader times={5} heightNwidth='h-10 w-full' /> : renderUsers}
                {err ? renderError() : ''}
            </div>
        </div>
    )
}

export default UsersList