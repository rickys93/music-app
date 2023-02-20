import "./Album.css"
import { useState } from 'react'

function Album(props) {
    const {title, year} = props
    const [liked, setLiked] = useState(false)

    function handleClick(e) {
        if (liked) {
            e.target.textContent = "Like"
            setLiked(false)
        } else {
            e.target.textContent = "✔"
            setLiked(true)
        }
    }

    return (
        <li className="album">
            <div>
                <div>{title}</div>
                <div>{year}</div>
            </div>
            <button 
                className="like-button"
                onClick={handleClick}
            >Like</button>
        </li>
    )
}

export default Album