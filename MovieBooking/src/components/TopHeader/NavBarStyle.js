import { makeStyles } from '@material-ui/core/styles';

const NavBarStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'left',
    display: 'none',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 20,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  },
 
movieList: {
    position: 'absolute',
    right: '-23px',
    top: '-30px',
    textAlign: 'initial',
    backgroundColor: 'black',
    padding: '15px',
    color: 'black',
  },
 headerContainer:{
  backgroundColor: 'black',
 },
 searchContainer:{
  backgroundColor: 'black',
 },
}));
export default NavBarStyles;