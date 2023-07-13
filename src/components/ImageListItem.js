import React from 'react'

const ImageListItem = ({ image }) => {
    return (
        <div className='flex flex-col items-center'  >
            <img src={image.src} alt={image.alt} className='w-40 h-40' />
            <div className='text-sm text-center' >{image.alt}</div>
        </div >
    )
}

export default ImageListItem;