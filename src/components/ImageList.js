import React from 'react'
import { useCreateImageMutation, useFetchImagesQuery } from '../store'
import Button from './Button';

const ImageList = ({ album }) => {
    const { data, error, isLoading } = useFetchImagesQuery(album);
    const [createImage, result] = useCreateImageMutation();

    let imagesArr;

    if (!isLoading && !error) {
        imagesArr = data.map((image) => {
            return (
                <div key={image.id} className='p-3 m-1 flex flex-col items-center '  >
                    <img src={image.src} alt={image.alt} className='w-40 h-40' />
                    <div className='text-sm text-center' >{image.alt}</div>
                </div >
            )
        })
    }

    const handleAddImage = () => {
        // Add Image
        console.log('Add Image request from ' + album.name);
        createImage(album);
    }

    return (
        <div>
            <div className='flex flex-row justify-between items-center m-2' >
                <label className='text-md font-bold' >Images</label>
                <Button primary onClick={handleAddImage} className='text-sm'  >+ Add Image</Button>
            </div>
            <div className='grid grid-cols-3 grid-flow-row'>
                {imagesArr}
            </div>
        </div>
    )
}

export default ImageList