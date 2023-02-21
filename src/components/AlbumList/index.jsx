import "./index.css"

import Album from "../Album"

function AlbumList({albums}) {

    return (
        <>
            <h2 className="section-title">Album List</h2>
            <ul>
                {albums.map((album, idx)=> <Album key={idx} title={album.title} year={album.year}/> )}
            </ul>
        </>
    )
}

export default AlbumList