import MovieItem from "./MovieItem"

const MovieContainer = (props) => {
    const displayMovie = props.data.map((item, index) => {
        return (
            <MovieItem item={item} key={index} />
        )
    })

    return (
        <div>
            {displayMovie}
        </div>
    )
}

export default MovieContainer