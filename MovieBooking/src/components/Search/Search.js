import React from 'react';
import { connect } from "react-redux";
import { searchMovies} from '../../redux/actions';
import {useState} from 'react'
import { baseImgUrl } from '../../constant';
import NavBarStyles from '../TopHeader/NavBarStyle';
import { Link } from 'react-router-dom'
const Search =(props)=> {

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const styles = NavBarStyles();

  const handleChange = (e) => {

    console.log("handleChange", e.target.value);
    setValue(e.target.value);
    if (e.target.value == ''){
      setSuggestions([]);
    }else{
      getSearchedMovies( e.target.value);
    }
    
  };

  const getSearchedMovies = (value) => {
    console.log("getSearchedMovies", value);
     props.searchMovies(value);
     setSuggestions(props.searchedMovies?props.searchedMovies:[])

  }

  
    return (
      <div>
        <div className={styles.movieList}>
          <input type="text" value={value} onChange={handleChange} placeholder={`🔍`} />
          suggestions? {suggestions.map((movie , index) => (
             <Link className={'link'} to=
             {{
               pathname: '/movieDetail',
               state: {
                 params: {
                   movieDetails: movie,
                 }
               }
             }}>
            <section  key={index} style={{
              width: '300px',
              display: 'flex',
              marginTop: '34px',
              color: 'black',
              background: 'white',

            }}>
              <img style={{
                width: '75px',
                height: '75px'
              }} src={`${baseImgUrl}${movie.poster_path ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} /> <ul>{movie.title} </ul> </section>
          </Link>))}
          </div>
        :<div></div>
      </div>
    );
}

const mapStateToProps = (state) => (
 {
    searchedMovies: state.searchedMovies
  })
  
  
  const mapDispatchToProps = {
    searchMovies: searchMovies
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);

