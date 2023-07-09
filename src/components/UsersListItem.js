import React from 'react';
import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { deleteUser } from '../store';
import useThunkOperator from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

const UsersListItem = ({ user }) => {
    const [doDeleteUser, isLoading, error] = useThunkOperator(deleteUser);

    const renderButton = () => {
        if (isLoading) {
            return (
                <div className='flex flex-row items-center' >
                    <Button className="bg-gray-700 text-gray-400 border-gray-400" >
                        <iframe src="https://embed.lottiefiles.com/animation/98432" width="15px" height="20px" title='Deleting a user' ></iframe>
                    </Button>
                </div>
            )
        } else {
            return (
                <Button className="border-none" onClick={() => doDeleteUser(user)}>
                    <GoTrash />
                </Button>
            )
        }
    }

    const header =
        <>
            <div className='mb-2 bg-20 rounded flex flex-row'>
                {renderButton()}
                {error && <div>Error Deleting User</div>}
                <div className='flex p-2 justify-between items-center'>{user.name}</div>
            </div>
        </>

    return (
        <ExpandablePanel header={header}>
            <div className='ml-12' >
                <AlbumsList user={user} />
            </div>
        </ExpandablePanel>
    )
}

export default UsersListItem
