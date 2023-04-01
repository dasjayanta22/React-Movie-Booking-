import './App.css';

import Carousel from './components/Carousel';
import { connect } from "react-redux";
import { getTrendingMovies, getTopRatedMovies, getPopularMovies} from './redux/actions';
import { Card } from '@material-ui/core';
import MovieItem from './components/MovieItem';
import NavBar from './components/TopHeader/NavBar';
import {  useEffect } from 'react';
const App =(props)=> {

  useEffect(() => {
       props.getTrendingMovies();
       props.getTopRatedMovies();
       props.getPopularMovies();
  }, []);
  


    return (
      <div className="App"> 
          <NavBar/>
          <section  style={{ display: 'flex', flexDirection : 'row' , justifyContent:'space-evenly', margin: '-1%' , background:'white'}}>
               <Card style={{ background: 'white', borderColor:'red', marginTop:'85px', marginLeft: '50px' , marginBottom: '50px' }}>
                <h4 style={{color: 'black' , fontSize: '20px'}}>Latest Movies</h4>
               <MovieItem  movies={props.topRatedMovies} /> </Card> 
               <Card style={{ background: 'white', border:'2px', borderColor:'red', marginTop:'85px', marginLeft: '50px' , marginBottom: '50px'}}>
               <h4 style={{color: 'black' , fontSize: '20px'}}>Upcoming Movies</h4> 
               <MovieItem  movies={props.trendingMovies} /> </Card> 
               <Card style={{ background: 'white', border:'2px', borderColor:'red', marginTop:'85px', marginLeft: '50px' , marginBottom: '50px' , marginRight: '50px'}}>
               <h4 style={{color: 'black' , fontSize: '20px'}}> Popular Movies</h4>
               <MovieItem  movies={props.popularMovies}  /> </Card> 
          </section>
         <Carousel style={{ background: 'white', marginTop:'75px'}} movies={props.trendingMovies}  /> 
         <Card style={{ background: 'white', border:'2px', borderColor:'red', marginTop:'25px', marginLeft: '-1%' , marginBottom: '50px'}}>
          <MovieItem  movies={props.popularMovies} bottomRow = "true" showBookButton="true"/> 
          </Card>
      </div>
      );
  }



const mapStateToProps = (state) => (
{
  trendingMovies: state.trendingMovies,
  topRatedMovies: state.topRatedMovies,
  popularMovies: state.popularMovies,

})


const mapDispatchToProps = {
  getTrendingMovies: getTrendingMovies,
  getTopRatedMovies: getTopRatedMovies,
  getPopularMovies: getPopularMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
