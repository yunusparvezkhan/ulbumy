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

    const renderAddImageBtn = () => {
        if (result.isLoading) {
            return (
                <div className='flex flex-row items-center' >
                    <iframe src="https://embed.lottiefiles.com/animation/98432" width="35px" height="35px" className='mr-3' title='Adding a image' ></iframe>
                    <Button className="bg-gray-700 text-gray-400 border-gray-400" >+ Add Image</Button>
                </div>
            )
        } else {
            return <Button primary onClick={handleAddImage} >+ Add Image</Button>
        }
    }

    return (
        <div>
            <div className='flex flex-row justify-between items-center m-2' >
                <label className='text-md font-bold' >Images</label>
                <div className='text-sm'>
                    {renderAddImageBtn()}
                </div>
            </div>

            <div>
                {renderBody()}
            </div>

        </div>
    )
}

export default ImageList