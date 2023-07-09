import React from 'react'
<<<<<<< HEAD
import { useFetchAlbumsQuery } from '../store/apis/albumsApi'
const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    console.log(data);

    const renderAlbums = data.map((album) => {
        return (
            <div className='p-10 bg-gray-700'>
                <span>{album.name}</span>
            </div>
        )
    })

=======

const AlbumsList = ({ user }) => {
>>>>>>> parent of 691d0c0... feat: access albums data with RTK
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