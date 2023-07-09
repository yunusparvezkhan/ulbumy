import React from 'react';
import { useFetchAlbumsQuery } from '../store';

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    if (!isLoading && !error) {
        const renderAlbums = data.map((album) => {
            return (
                <div className='p-10 m-3 bg-gray-700' key={album.id}>
                    <span>{album.name}</span>
                </div>
            )
        })

        return (
            <div>
                Albums
                <div className='flex flex-row'>
                    {renderAlbums}
                </div>
            </div>
        )
    } else if (!error) {
        return (
            <div>
                Albums
                <div className='p-5 items-center flex flex-col' >
                    Loading...
                </div>
            </div>
        )
    } else {
        <div>
            Albums
            <div className='p-5 items-center flex flex-col'>
                Error: {error}
            </div>
        </div>
    }
}

export default AlbumsList