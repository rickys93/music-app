import "./Album.css"

function Album(props) {
    const {title, year} = props

    return (
        <li className="album">
            <div>
                <div>{title}</div>
                <div>{year}</div>
            </div>
            <button>Like</button>

        </li>
    )
}

export default Album