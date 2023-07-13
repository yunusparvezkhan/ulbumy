import React from 'react'
import { useCreateImageMutation, useFetchImagesQuery } from '../store'
import Button from './Button';
import ImageListItem from './ImageListItem';

const ImageList = ({ album }) => {
    const { data, error, isLoading } = useFetchImagesQuery(album);
    const [createImage, result] = useCreateImageMutation();

    let imagesArr;

    if (!isLoading && !error) {
        imagesArr = data.map((image) => {
            return <ImageListItem image={image} key={image.id} />
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