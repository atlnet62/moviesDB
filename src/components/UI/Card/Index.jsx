
const URL = "https://images.tmdb.org/t/p/original"; 

function Card(props) {

  return (
    <article className="Card" key={props.id}> 
        <h3>{props.title}</h3>
        {props.poster_path === null ? 'Sorry, Image not found' : <img src={`${URL}${props.poster_path}`} alt={props.title} />}
        <p>{props.release_date}</p>
        <p>{props.overview}</p>
    </article>
  )
}

export default Card;