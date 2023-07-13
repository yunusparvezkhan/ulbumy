import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import { GoTrash } from 'react-icons/go'
import { useRemoveAlbumMutation } from '../store'
import ImageList from './ImageList'

const AlbumListItem = ({ album }) => {
    const [doDelete, result] = useRemoveAlbumMutation();

    const handleDelete = () => {
        doDelete(album)
    }

    const renderButton = () => {
        if (result.isLoading) {
            return (
                <div className='cursor-pointer p-2 bg-gray-500 border border-gray-300 ' >
                    <GoTrash />
                </div>
            )
        } else {
            return (
                <div className='cursor-pointer p-2' onClick={handleDelete}>
                    <GoTrash />
                </div>
            )
        }
    }

    const header =
        <>
            <div className='rounded flex flex-row items-center'>
                {renderButton()}
                <div className='p-1 text-sm' >{album.name}</div>
            </div>
        </>

    return (
        <ExpandablePanel header={header} bgcolor='bg-40' >
            <div className='ml-9'>
                <ImageList album={album} />
            </div>
        </ExpandablePanel>
    )
}

export default AlbumListItem