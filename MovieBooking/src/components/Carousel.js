import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import muiTheme from '../themes/mui'
import { ThemeProvider } from '@material-ui/core/styles';



import { baseImgUrl } from '../constant';
import CarousalStyles from './CarouselStyle'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const Carousel = ({ movies }) => {
  const styles = CarousalStyles();
  const theme = useTheme();
  const maxSteps = 5;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={styles.root} style={{ height: '500px'}}>
      <AutoPlaySwipeableViews style={{ height: '500px' }}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {movies ? movies.map((movie, i) => (
          <div key={i}>
            {Math.abs(activeStep - i) <= 2 ? (
              <div style={{ height: '450px' }}>
                <img className={styles.img} src={`${baseImgUrl}${movie.backdrop_path}`} alt={movie.name} />
                <h1 className={styles.title}>{movie.original_title ? movie.original_title : movie.name}</h1>
              </div>
            ) : null}
          </div>
        )) : null}
      </AutoPlaySwipeableViews>
      <ThemeProvider theme={muiTheme}>
        <MobileStepper 
          variant="dots"
          steps={maxSteps}
          position="bottom"
          activeStep={activeStep}
          className={styles.root && styles.stepper}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>
          }
        />
      </ThemeProvider>
    </div>
  );
}

export default Carousel;
