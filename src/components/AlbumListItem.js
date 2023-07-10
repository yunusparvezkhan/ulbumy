import React from 'react'

const AlbumListItem = ({ album }) => {
    return (
        <div className='p-10 m-3 bg-gray-700'>
            <span>{album.name}</span>
        </div>
    )
}

export default AlbumListItem