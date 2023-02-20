import "./AlbumList.css"

import Album from "./Album"

function AlbumList() {
    const albums = [
        {title:"So Long Forever", year:2016},
        {title:"Life After", year:2019},
        {title:"Lost in the Night", year:2014},
        {title:"Chase The Night", year:2015},
    ]

    return (
        <>
            <h2 className="section-title">Album List</h2>
            <ul>
                {albums.map(album => (
                    <Album title={album.title} year={album.year}/>
                ))}
            </ul>
        </>
    )
}

export default AlbumList