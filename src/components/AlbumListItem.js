import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import { GoTrash } from 'react-icons/go'
import { useRemoveAlbumMutation } from '../store'

const AlbumListItem = ({ album }) => {
    const [doDelete] = useRemoveAlbumMutation();

    const handleDelete = () => {
        console.log('Deletation request of album - ' + album.name);
        doDelete(album)
    }

    const header =
        <>
            <div className='rounded flex flex-row items-center'>
                <div className='cursor-pointer p-2' onClick={handleDelete}>
                    <GoTrash />
                </div>
                <div className='p-1 text-sm' >{album.name}</div>
            </div>
        </>

    return (
        <ExpandablePanel header={header} bgcolor='bg-40' >
            <div className='ml-9'>
                <label className='text-sm' >Images for album {album.name}</label>
            </div>
        </ExpandablePanel>
    )
}

export default AlbumListItem