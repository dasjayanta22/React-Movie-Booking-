
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import NavBar from '../TopHeader/NavBar';
import muiTheme from '../../themes/mui';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { baseImgUrl } from '../../constant';

import MovieDetailStyle from './MovieDetaiStyle';



const MovieDetail=(props)=>{

  const classes = MovieDetailStyle();
  const [expanded, setExpanded] = React.useState(false);

  const { params } = props.location.state;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <NavBar/>
      <ThemeProvider theme={muiTheme}>
        <Card className={classes.root}>
           <CardContent>
          <CardMedia
            className={classes.media}
            image={`${baseImgUrl}${params.movieDetails.poster_path ? params.movieDetails.poster_path : params.movieDetails.backdrop_path}`}
            title="Paella dish"
          />
         
          <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          bottom: 50, 
                          left: '60%', 
                        }} >
             
            <CardContent>
            <CardHeader 
            avatar={
              <React.Fragment>

                <Avatar aria-label="recipe" className={classes.avatar}>
                  {params.movieDetails.vote_average}
                </Avatar>
                <sup className={classes.rating}>IMDB</sup>
              </React.Fragment>
            }
            title={params.movieDetails.original_title ? params.movieDetails.original_title : params.movieDetails.name}
            subheader={`Release Date : ${params.movieDetails.release_date}`}
          /> 
              <Typography paragraph>
                IMDB popularity : {params.movieDetails.popularity}
              </Typography>
              <Typography>
                IMDB Stars : {params.movieDetails.vote_count}
              </Typography>
              <Typography  style={{marginRight:'20px' , marginTop: '20px'}}>
              {params.movieDetails.overview}

            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <Button  style={{maxWidth: '500px', maxHeight: '300px' , background:'red', color: 'white' , width:'250px' , height: '50px' , fontSize: '18px'}}>
              <Link className={'link'} to=
                {{
                  pathname: '/booking',
                  state: {
                    params: {
                      movieDetails: params.movieDetails,
                    }
                  }
                }}>
              Book Tickets </Link>
            </Button>
          </CardActions>
              </div>
           
          </CardContent>
         
            
        </Card>
      </ThemeProvider>
    </React.Fragment>
  );
}


export default  MovieDetail;