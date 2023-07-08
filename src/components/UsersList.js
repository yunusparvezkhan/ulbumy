import React, { useEffect } from 'react';
import { fetchUsers, addUser } from '../store';
import { useSelector } from 'react-redux';
import SkeletonLoader from './SkeletonLoader';
import Button from './Button'
import useThunkOperator from '../hooks/use-thunk';

const UsersList = () => {
    const [doFetchUsers, loadingUsers, loadingUsersErr] = useThunkOperator(fetchUsers);
    const [doCreateUsers, isCreatingUser, isCreatingUserErr] = useThunkOperator(addUser);

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const { data } = useSelector((state) => {
        return state.users;
    });

    const renderUsers = data.map((user) => {
        return (
            <div key={user.id} className='mb-2 bg-20 rounded '>
                <div className='flex p-2 justify-between items-center cursor-pointer'>{user.name}</div>
            </div>
        )
    });

    const handleAddUser = () => {
        doCreateUsers();
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

    const renderErr = () => {
        return (
            <div className='err-container p-20 flex flex-col items-center '>
                {/* <iframe src="https://embed.lottiefiles.com/animation/3097" className='neterrgif' title='Network Erorr' /> */}
                {/* <iframe src="https://embed.lottiefiles.com/animation/99345" className='neterrgif' title='Network Erorr'></iframe> */}
                {/* <iframe src="https://embed.lottiefiles.com/animation/98284" className='neterrgif' title='Network Erorr'></iframe> */}
                <iframe src="https://embed.lottiefiles.com/animation/90333" className='neterrgif' title='Network Erorr'></iframe>
                <label className='text-4xl font-light' >{loadingUsersErr}</label>
                <label className='text-8xl mt-5' >{`:(`}</label>
            </div >
        )
    }

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
                {loadingUsers ? <SkeletonLoader times={5} heightNwidth='h-10 w-full' /> : renderUsers}
                {loadingUsersErr ? renderErr() : ''}
            </div>
        </div>
    )
}

export default UsersList;