const MovieItem = (props) => {
    return (
        <div>
        <h5>{props.item.title}</h5>
        <h6>{props.item.description}</h6>
        <img className="movieImg" src={props.item.image}/>
        </div>
    )
}

export default MovieItem