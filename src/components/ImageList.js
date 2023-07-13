import React from 'react'

const ImageList = ({ album }) => {
    return (
        <div>
            <label className='text-sm' >Images for album {album.name}</label>
        </div>
    )
}

export default ImageList