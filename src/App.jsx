import { useState, useEffect } from 'react'
import "./App.css"
import "./index.css"



import albumData from "./database/albums"

import { AlbumForm, AlbumList, Bio, Header } from './components/index'


function App() {
    const [albums, setAlbums] = useState(albumData)
    const [count, setCount] = useState(0)

    function getRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    useEffect(() => {

        const randomColor = getRandomColor()
        document.querySelector(".main-section").style.backgroundColor = randomColor

        const timer = setInterval(() => {
            setCount(prev => prev + 1)

        }, 30000)

        return () => {
            clearInterval(timer)
        }

    }, [count])

    return (
    <>
        <Header />
        <section className="main-section">
            <div className="section"><Bio /></div>
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
        </section>
    </>
  )
}

export default App
