import React from 'react'

const AlbumListItem = ({ album }) => {
    return (
        <div className='p-3 my-3 rounded bg-40'>
            <span>{album.name}</span>
        </div>
    )
}

export default AlbumListItem