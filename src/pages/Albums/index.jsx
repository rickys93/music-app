import React, { useState } from 'react'

import { AlbumList, AlbumForm } from '../../components'

import albumsData from '../../database/albums'

function Albums() {
    const [albums, setAlbums] = useState(albumsData)

    return (
        <div className="section">
        <AlbumForm 
        albums={albums} 
        setAlbums={setAlbums} 
        />
        
        <AlbumList 
        albums={albums} 
        setAlbums={setAlbums} 
        />
        
        </div>
    )
}

export default Albums 