import { useState } from 'react'
import "./App.css"
import "./index.css"

import Header from './Header'
import Bio from "./Bio"
import AlbumList from "./AlbumList"
import AlbumForm from "./AlbumForm"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <section className="main-section">
            <div className="section"><Bio /></div>
            <div className="section"><AlbumForm /><AlbumList /></div>
        </section>
    </>
  )
}

export default App
