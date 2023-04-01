import { makeStyles } from '@material-ui/core/styles';



const MovieDetailStyle = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
      margin: '30px auto',
      backgroundColor: 'white',
      color: "white"
    },
    media: {
      paddingTop: '60%',
      maxWidth: '100%',
      color: "white"
    },
    rating: {
      fontSize: '15px',
      marginLeft: '7px',
      color: "white",
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: 'red',
      color: 'white', 
      fontSize: '20px',
    },
    link: {
      textDecoration: 'none',
      color: 'blue', 
      width: '200px'
    }
  }));

  
  export default MovieDetailStyle;