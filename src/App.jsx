import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"

import getRandomColor from "./helpers/helperFunctions"
import albumData from "./database/albums"
import { NavBar } from './layout'
import * as Pages from "./pages"


function App() {
    const [albums, setAlbums] = useState(albumData)
    const [count, setCount] = useState(0)
    const [backgroundImage, setBackgroundImage] = useState(getRandomBackground())

    function getRandomBackground() {
        return {
            backgroundImage:`linear-gradient(120deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`
        }
    }

    useEffect(() => {

        setBackgroundImage(getRandomBackground())

        const timer = setInterval(() => {
            setCount(prev => prev + 1)

        }, 30000)

        return () => {
            clearInterval(timer)
        }

    }, [count])

    return (
    <>
      <div className="App" style={backgroundImage}>
        <NavBar />
        <div className='mainsection'>
            <Routes>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/bio" element={<Pages.Bio />} />
                <Route path="/albums" element={<Pages.Albums />} />
            </Routes>
        </div>
      </div>
       {/* <section className="main-section" }>
        
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
            </section> */}
    </>
  )
}

export default App
