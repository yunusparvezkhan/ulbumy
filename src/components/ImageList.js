import React from 'react'
import { useFetchImagesQuery } from '../store'
import Button from './Button';

const ImageList = ({ album }) => {
    const { data, error, isLoading } = useFetchImagesQuery(album);

    let imagesArr;

    if (!isLoading && !error) {
        imagesArr = data.map((image) => {
            return (
                <div key={image.id} >
                    <img src={image.src} alt={image.alt} className='w-40 m-3 h-40' />
                    <div className='text-sm ml-3' >{image.alt}</div>
                </div >
            )
        })
    }

    const handleAddImage = () => {
        // Add Image
        console.log('Add Image request from ' + album.name)
    }

    return (
        <div>
            <div className='flex flex-row justify-between items-center m-2' >
                <label className='text-md font-bold' >Images</label>
                <Button primary onClick={handleAddImage} className='text-sm'  >+ Add Image</Button>
            </div>
            <div className='flex flex-row items-center'>
                {imagesArr}
            </div>
        </div>
    )
}

export default ImageList