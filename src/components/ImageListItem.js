import React from 'react'
import { GoTrash } from 'react-icons/go';
import Button from './Button';

const ImageListItem = ({ image }) => {

    const handleDelete = () => {
        // Delete
        console.log('Delete request from image id ' + image.id)
    }

    return (
        <div className='flex flex-col items-center'  >
            <div className='text-sm text-center mb-1' >{image.alt}</div>
            <img src={image.src} alt={image.alt} className='w-40 h-40 mb-2 ' />
            <Button danger className='flex flex-row items-center gap-1 mb-4 cursor-pointer text-sm' onClick={handleDelete}>
                <GoTrash /> Delete
            </Button>
        </div >
    )
}

export default ImageListItem;