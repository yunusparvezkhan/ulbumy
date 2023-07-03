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
        return <div key={user.id} >{user.name}</div>
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
            <h2>Fetch Users</h2>
            {isLoading ? <SkeletonLoader times={5} /> : renderUsers}
            {err ? renderError() : ''}
        </div>
    )
}

export default UsersList