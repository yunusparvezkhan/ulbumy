import React, { useEffect } from 'react'
import { fetchUsers } from '../store'
import { useSelector, useDispatch } from 'react-redux'

const UsersList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    const users = useSelector((state) => {
        return state.users;
    })

    const renderUsers = users.data.map((user) => {
        return <div>{user.name}</div>
    })

    return (
        <div>
            <h2>Fetch Users</h2>
            {renderUsers}
        </div>
    )
}

export default UsersList