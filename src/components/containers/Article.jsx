import React from 'react'
const URL = "https://images.tmdb.org/t/p/original"; 

function Article(props) {
  return (
    <article key={props.id}> 
        <h3>{props.title}</h3>
        <img src={`${URL}${props.poster_path}`} alt={props.title} />
        <p>{props.overview}</p>
    </article>
  )
}

export default Article