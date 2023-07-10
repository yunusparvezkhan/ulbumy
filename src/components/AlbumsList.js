import React from 'react';
import { useFetchAlbumsQuery } from '../store';
import AlbumListItem from './AlbumListItem';

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    if (!isLoading && !error) {
        const renderAlbums = data.map((album) => {
            return (
                <AlbumListItem album={album} key={album.id} />
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