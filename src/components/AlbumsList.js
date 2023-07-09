import React from 'react'
import { useFetchAlbumsQuery } from '../store/apis/albumsApi'

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    console.log(data, error, isLoading);

    return (
        <div>
            Albums for {user.name}
        </div>
    )
}

export default AlbumsList