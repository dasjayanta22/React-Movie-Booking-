import { makeStyles } from '@material-ui/core/styles';

const CarousalStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    backgroundColor: 'white',
    maxHeight: '100%',
  },
  stepper: {
    position: 'relative',
    bottom: '10vh',
    backgroundColor: 'white'
  },
  title: {
    position: 'relative',
    bottom: '25vh',
    color: '#FFD700',
    textAlign: 'right',
    textTransform: 'uppercase',
    marginRight: '50px',
    fontSize: '55px',
    opacity: 0.8
  },
  img: {
    height: '450px',
    display: 'block',
    maxWidth: '100%',
    objectFit: 'cover',
    overflow: 'hidden',
    width: '100%',
  },
  btn: {
    position: 'relative',
    bottom: '32vh',
    right: '75vh',
    marginRight: "200px",
    backgroundColor: '#e4c520d6',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '5px',
    height: '32px',
    width: '100px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  dot: {
    backgroundColor: "#008000"
  },
  dotActive: {
    backgroundColor: "#3f51b5"
  },
}));

export default CarousalStyles;