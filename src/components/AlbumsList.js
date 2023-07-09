import React from 'react'

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    console.log(data, error, isLoading);

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