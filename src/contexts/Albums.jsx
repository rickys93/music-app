import { useState, createContext, useContext } from "react";
import Album from "../pages/Albums"

import albums from '../database/albums'

const AlbumsContext = createContext()

export const AlbumsProvider = () => {
    const [albums, setAlbums] = useState(albums)

    return (
        <AlbumsContext.Provider value={{albums, setAlbums}}>
            <Album />
        </AlbumsContext.Provider>
    )
}

export const useAlbums = () => useContext(AlbumsContext)