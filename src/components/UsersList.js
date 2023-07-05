import React, { useEffect, useState } from 'react';
import { fetchUsers, addUser } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import SkeletonLoader from './SkeletonLoader';
import Button from './Button'

const UsersList = () => {

    const [laodingUsers, setLoadingUsers] = useState(false);
    const [loadingUsersErr, setLoadingUsersErr] = useState(null);

    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [isCreatingUserErr, setIsCreatingUserErr] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setLoadingUsers(true);
        dispatch(fetchUsers())
            .unwrap().catch((err) => setLoadingUsersErr(err.message))
            .finally(() => setLoadingUsers(false));
    }, [dispatch])

    const { data } = useSelector((state) => {
        return state.users;
    })

    const renderUsers = data.map((user) => {
        return (
            <div key={user.id} className='mb-2 bg-20 rounded '>
                <div className='flex p-2 justify-between items-center cursor-pointer'>{user.name}</div>
            </div>
        )
    })

    const handleAddUser = () => {
        setIsCreatingUser(true);
        dispatch(addUser())
            .unwrap()
            .catch((err) => setIsCreatingUserErr(err.message))
            .finally(() => setIsCreatingUser(false));
    }

    const renderAddUserBtn = () => {
        if (isCreatingUser) {
            return <Button className="border-none" >Adding a new user...</Button>
        } else {
            return <Button primary onClick={handleAddUser}>+ Add User</Button>
        }
    }

    const renderErr = () => {
        return (
            <div className='err-container p-20 flex flex-col items-center '>
                {/* <iframe src="https://embed.lottiefiles.com/animation/3097" className='neterrgif' title='Network Erorr' /> */}
                <iframe src="https://embed.lottiefiles.com/animation/99345" className='neterrgif' title='Network Erorr'></iframe>
                {/* <iframe src="https://embed.lottiefiles.com/animation/98284" className='neterrgif' title='Network Erorr'></iframe> */}
                {/* <iframe src="https://embed.lottiefiles.com/animation/90333" className='neterrgif' title='Network Erorr'></iframe> */}
                <label className='text-4xl font-light' >{loadingUsersErr}</label>
                <label className='text-8xl mt-5' >{`:(`}</label>
            </div >
        )
    }

    return (
        <div>
            <div className='flex flex-row justify-between m-3 items-center' >
                <label className='text-xl font-bold' >Users</label>
                {renderAddUserBtn()}
            </div>
            <div>
                {laodingUsers ? <SkeletonLoader times={5} heightNwidth='h-10 w-full' /> : renderUsers}
                {loadingUsersErr ? renderErr() : ''}
            </div>
        </div>
    )
}

export default UsersList;