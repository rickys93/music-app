import { useState } from 'react'
import "./App.css"
import "./index.css"

import albumData from "./database/albums"

import { AlbumForm, AlbumList, Bio, Header } from './components/index'


function App() {
  const [albums, setAlbums] = useState(albumData)

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
