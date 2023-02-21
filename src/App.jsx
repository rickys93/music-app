import { useState } from 'react'
import "./App.css"
import "./index.css"

import { Album, AlbumForm, AlbumList, Bio, Header } from './components/index'


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
