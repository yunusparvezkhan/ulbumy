import React, { useEffect } from 'react'
import { fetchUsers } from '../store'
import { useSelector, useDispatch } from 'react-redux'

const UsersList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    const { data, isLoading, err } = useSelector((state) => {
        return state.users;
    })

    const renderUsers = data.map((user) => {
        return <div>{user.name}</div>
    })

    const renderLoading = () => {
        return (
            <div>
                <label className=''>Loading</label>
            </div>
        )
    }

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
            {isLoading ? renderLoading() : renderUsers}
            {err ? renderError() : ''}
        </div>
    )
}

export default UsersList