import React from 'react'
import { useFetchAlbumsQuery } from '../store/apis/albumsApi'

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    const renderAlbums = data.map((album) => {
        return (
            <div className='p-10 bg-gray-700 m-3' >
                <span>{album.name}</span>
            </div>
        )
    })

    return (
        <div>
            Albums
            <div className='flex flex-row'>
                {/* {renderAlbums} */}
            </div>
        </div>
    )
}

export default AlbumsList