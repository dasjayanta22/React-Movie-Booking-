import React from 'react';
import './Row.css';
import { Link } from 'react-router-dom'
import { Card, CardActionArea } from '@material-ui/core';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
const baseUrl = "https://image.tmdb.org/t/p/original/";

const Collection=({ title, movies, isLargeRow, showButton })=> {

  const onClickHandler=()=>{
    console.log("onClickHandler");
  }
  

  return (

    <Card >
    {/* <div className="row"> */}
      <h2>{title}</h2>
      <div className="row_posters">
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
           <span onClick={onClickHandler} key={index}> <img className={`${isLargeRow ? "row_poster" : "row_poster_large"}`} key={index} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          <button className={`${showButton ? 'bookBtn' : 'hideBookBtn'}`} ><Link className={'link'} to=
            {{
              pathname: '/movieDetails',
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
    {/* </div> */}
    </Card>
  )
}

export default Collection;