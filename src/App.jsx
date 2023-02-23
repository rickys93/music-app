import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from "./App.css"

import getRandomColor from "./helpers/helperFunctions"
import { NavBar } from './layout'
import * as Pages from "./pages"


function App() {
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
      <div className='app' style={backgroundImage}>
        <NavBar />
        <div className='mainsection'>
            <Routes>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/bio" element={<Pages.Bio />} />
                <Route path="/albums" element={<Pages.Albums />} />
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App
