import React from 'react'
import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { useDelteImageMutation } from '../store';

const ImageListItem = ({ image }) => {
    const [doDeleteImage, result] = useDelteImageMutation();

    const handleDelete = () => {
        // Delete
        console.log('Delete request from image id ' + image.id);
        doDeleteImage(image);
    }

    return (
        <div className='flex flex-col items-center'  >
            <img src={image.src} alt={image.src} className='w-40 h-40 mb-2 ' />
            <Button danger className='flex flex-row items-center gap-1 mb-4 cursor-pointer text-sm' onClick={handleDelete}>
                <GoTrash /> Delete
            </Button>
        </div >
    )
}

export default ImageListItem;