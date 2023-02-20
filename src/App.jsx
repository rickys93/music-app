import { useState } from 'react'
import "./App.css"
import "./index.css"

import Header from './Header'
import Bio from "./Bio"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <section className="main-section">
            <div id="main-section1" className="section"><Bio /></div>
            <div id="main-section2" className="section"></div>
        </section>
    </>
  )
}

export default App
