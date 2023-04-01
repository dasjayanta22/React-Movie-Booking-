import { makeStyles } from '@material-ui/core/styles';


const BookingStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: 'white',
      color: 'white',
      height: '100vh'
    },
    backButton: {
      marginRight: theme.spacing(1),
      color: 'white',
      backgroundColor: 'grey'
    },
    buttonContainer: {
      textAlign: 'center',
      width: '100%'
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  export default  BookingStyles;