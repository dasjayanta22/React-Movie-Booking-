import React from 'react';
import './MovieItem.css';
import { Link } from 'react-router-dom'
import { Card } from '@material-ui/core';
import { baseImgUrl } from '../constant';

const MovieItem =({ title, movies, bottomRow, showBookButton })=> {

  const onClickHandler=()=>{
    console.log("onClickHandler");
  }
  
  return (
    <Card >
      <h2>{title}</h2>
      <div className="row_items">
        {movies ? movies.map((movie, index) => {
          return (<Link className={'link'} to=
          {{
            pathname: '/movieDetail',
            state: {
              params: {
                movieDetails: movie,
              }
            }
          }}>
        <span onClick={onClickHandler} key={index} className="span"> <img className={`${bottomRow ? "row_item" : "row_item_large"}`} key={index} src={`${baseImgUrl}${bottomRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          <button className={`${showBookButton ? 'bookBtn' : 'hideBookBtn'}`} ><Link className={'link'} to=
            {{
              pathname: '/movieDetail',
              state: {
                params: {
                  movieDetails: movie,
                }
              }
            }}>
            Book  Now </Link></button></span> 
            </Link>)
        }) : null}

      </div>
    </Card>
  )
}

export default MovieItem;