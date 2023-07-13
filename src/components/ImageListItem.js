import React from 'react'
import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { useDelteImageMutation } from '../store';

const ImageListItem = ({ image }) => {
    const [doDeleteImage, result] = useDelteImageMutation();

    const handleDelete = () => {
        // Delete
        doDeleteImage(image);
    }

    const renderDeleteButton = () => {
        if (result.isLoading) {
            return (
                <Button className='flex flex-row items-center gap-1 mb-4 cursor-pointer text-sm bg-gray-700'>
                    <GoTrash /> Delete
                </Button>
            )
        } else {
            return (
                <Button danger className='flex flex-row items-center gap-1 cursor-pointer text-sm' onClick={handleDelete}>
                    <GoTrash /> Delete
                </Button>
            )
        }
    }

    return (
        <div className='flex flex-col items-center mb-4'  >
            <img src={image.src} alt={image.src} className='w-40 h-40 mb-2 ' />
            <div>
                {renderDeleteButton()}
            </div>
            <div className='mb-3' >
                {result.error && <p className='text-red-500 tet-center' >{result.error}</p>}
            </div>
        </div >
    )
}

export default ImageListItem;