import React from 'react'
import { useFetchImagesQuery } from '../store'

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

    return (
        <div>
            <label className='text-sm' >Images for album {album.name}</label>
            <div className='flex flex-row items-center'>
                {imagesArr}
            </div>
        </div>
    )
}

export default ImageList