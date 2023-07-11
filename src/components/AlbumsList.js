import React from 'react';
import { useCreateAlbumMutation, useFetchAlbumsQuery } from '../store';
import AlbumListItem from './AlbumListItem';
import SkeletonLoader from './SkeletonLoader';
import Button from './Button';

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [createAlbum] = useCreateAlbumMutation();

    let renderAlbums;

    const handleAddAlbum = () => {
        createAlbum(user);
    }

    const renderAddAlbumBtn = () => {
        if (isLoading) {
            return (
                <div className='flex flex-row items-center' >
                    <iframe src="https://embed.lottiefiles.com/animation/98432" width="35px" height="35px" className='mr-3' title='Adding a user' ></iframe>
                    <Button className="bg-gray-700 text-gray-400 border-gray-400" >+ Add Album</Button>
                </div>
            )
        } else {
            return <Button primary onClick={handleAddAlbum} >+ Add Album</Button>
        }
    }

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
            <div className='flex flex-row justify-between m-2 items-center' >
                <label className='text-md font-bold' >Albums</label>
                <div className="text-sm" >
                    {renderAddAlbumBtn()}
                </div>
            </div>

            <div>
                {isLoading ? <SkeletonLoader times={3} heightNwidth="h-14 w-full" /> : error ? error.status + ' || ' + error.error : renderAlbums}
            </div>
        </div>
    )
}

export default AlbumsList