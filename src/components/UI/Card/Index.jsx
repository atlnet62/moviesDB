import style from './style.module.css';

const URL = "https://images.tmdb.org/t/p/original"; 

function Card(props) {

  return (
    props.vote_average > 5 ? 
    <article className={`${style.Card}`} key={props.id}> 
        {props.poster_path === null ? 'Sorry, Image not found' : <img src={`${URL}${props.poster_path}`} alt={props.title} />}
        {/* <h3>{props.title}</h3>  */}
        <p>Rating : {props.vote_average} / 10 - {props.vote_count} votants</p>
        <p>{props.release_date}</p>
        {/* <p>{props.overview}</p> */}
    </article>
    : null
  )
}

export default Card;