import { useState, useEffect } from 'react'
import "./App.css"
import "./index.css"

import getRandomColor from "./helpers/helperFunctions"
import albumData from "./database/albums"
import { AlbumForm, AlbumList, Bio, Header } from './components/index'


function App() {
    const [albums, setAlbums] = useState(albumData)
    const [count, setCount] = useState(0)
    const [bgColorArray, setBgColorArray] = useState(["#f6d365", "#fda085"])

    useEffect(() => {

        setBgColorArray([getRandomColor(), getRandomColor()])

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
        <section className="main-section" style={{backgroundImage: `linear-gradient(120deg, ${bgColorArray[0]} 0%, ${bgColorArray[1]} 100%)`}}>
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
