import React from 'react';
import { useFetchAlbumsQuery } from '../store';
import AlbumListItem from './AlbumListItem';
import SkeletonLoader from './SkeletonLoader';

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    let renderAlbums = null;

    if (!isLoading && !error) {
        renderAlbums = data.map((album) => {
            return (
                <AlbumListItem album={album} key={album.id} />
            )
        })
    }

    // component return
    return (
        <div>
            Albums
            <div>
                {isLoading ? <SkeletonLoader times={3} heightNwidth="h-16 w-full" /> : error ? error.status + ' || ' + error.error : renderAlbums}
            </div>
        </div>
    )
}

export default AlbumsList