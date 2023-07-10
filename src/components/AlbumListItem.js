import React from 'react'
import ExpandablePanel from './ExpandablePanel'

const AlbumListItem = ({ album }) => {

    const header =
        <>
            <div className='rounded'>
                <div className='p-1 text-sm' >{album.name}</div>
            </div>
        </>

    return (
        <ExpandablePanel header={header} bgcolor='bg-40' >
            <label className='text-sm' >CONTENT !!!</label>
        </ExpandablePanel>
    )
}

export default AlbumListItem