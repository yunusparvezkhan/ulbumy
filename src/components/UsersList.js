import React, { useEffect } from 'react';
import { fetchUsers, addUser } from '../store';
import { useSelector } from 'react-redux';
import SkeletonLoader from './SkeletonLoader';
import Button from './Button'
import useThunkOperator from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';
import ErrorScreen from './ErrorScreen';

const UsersList = () => {
    const [doFetchUsers, loadingUsers, loadingUsersErr] = useThunkOperator(fetchUsers);
    const [doCreateUser, isCreatingUser, isCreatingUserErr] = useThunkOperator(addUser);

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const { data } = useSelector((state) => {
        return state.users;
    });

    const handleAddUser = () => {
        doCreateUser();
    }

    const renderAddUserBtn = () => {
        if (isCreatingUser) {
            return (
                <div className='flex flex-row items-center' >
                    <iframe src="https://embed.lottiefiles.com/animation/98432" width="35px" height="35px" className='mr-3' title='Adding a user' ></iframe>
                    <Button className="bg-gray-700 text-gray-400 border-gray-400" >+ Add User</Button>
                </div>
            )
        } else {
            return <Button primary onClick={handleAddUser}>+ Add User</Button>
        }
    }

    const renderUsers = data.map((user) => {
        return (
            <UsersListItem key={user.id} user={user} />
        )
    });

    return (
        <div>
            <div className='flex flex-row justify-between m-2 items-center' >
                <label className='text-xl font-bold' >Users</label>
                {renderAddUserBtn()}
            </div>

            <div className='mb-3' >
                {isCreatingUserErr ? <p className='text-red-500 text-right ' >{isCreatingUserErr}</p> : ''}
            </div>

            <div>
                {loadingUsers ? <SkeletonLoader times={5} heightNwidth='h-16 w-full' /> : renderUsers}
                {loadingUsersErr ? <ErrorScreen errorMessage={loadingUsersErr} /> : ''}
            </div>
        </div>
    )
}

export default UsersList;