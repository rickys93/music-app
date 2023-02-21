import "./index.css"
import Album from "../Album"
import { useState } from 'react'


function AlbumForm({albums, setAlbums}) {
    const [inputTitle, setInputTitle] = useState("")
    const [inputYear, setInputYear] = useState("")

    function handleTitleInput(e) {
        setInputTitle(e.target.value)
    }

    function handleYearInput(e) {
        setInputYear(e.target.value)
    }

    function addAlbum(e) {
        e.preventDefault()
        const newAlbum = {title:inputTitle, year:inputYear}
        setAlbums([...albums, newAlbum])
        
    }

    return (
        <>
            <h2>Add Album</h2>
            <form onSubmit={addAlbum}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    value={inputTitle}
                    onChange={handleTitleInput}
                    required/>
                <label htmlFor="year">Year</label>
                <input 
                    type="number" 
                    id="year" 
                    min="1900" 
                    max="2099" 
                    step="1" 
                    value={inputYear}
                    onChange={handleYearInput}
                    required/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default AlbumForm