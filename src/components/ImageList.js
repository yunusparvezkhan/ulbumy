import React from 'react'
import { useCreateImageMutation, useFetchImagesQuery } from '../store'
import Button from './Button';
import ImageListItem from './ImageListItem';
import SkeletonLoader from './SkeletonLoader';
import ErrorScreen from './ErrorScreen';

const ImageList = ({ album }) => {
    const { data, error, isLoading } = useFetchImagesQuery(album);
    const [createImage, result] = useCreateImageMutation();

    let imagesArr;

    if (!isLoading && !error) {
        imagesArr = data.map((image) => {
            return <ImageListItem image={image} key={image.id} />
        })
    }

    const renderBody = () => {
        if (isLoading) {
            return (
                <div className='grid grid-cols-3 grid-flow-row'>
                    <SkeletonLoader times={3} heightNwidth="h-40 w-40" addlStyle='flex flex-col items-center' />
                </div>
            )

        } else if (error) {
            return (
                <ErrorScreen errorMessage={error.status + ' || ' + error.error}
                    gifw='500px'
                    gifh='300px'
                    msgs='text-4xl'
                    exps='text-7xl'
                    customStyle='album-err-container' />
            )
        } else {
            return (
                <div className='grid grid-cols-3 grid-flow-row'>
                    {imagesArr}
                </div>
            )
        }
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

            <div>
                {renderBody()}
            </div>

        </div>
    )
}

export default ImageList