import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/BookingDetail';
import MovieDetail from './components/MovieDetails/MovieDetails';


import { Provider } from 'react-redux';
import reducer from './redux/reducers'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';
import { Route,  Redirect,  Switch, BrowserRouter as Router } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(

  <Provider store={store}>
  <Router>
    <div>
      <Switch>
      <Route exact path="/">
          <Redirect to="/movies"/>
      </Route>
       <Route  path="/movies" component={App} />
       <Route  path="/movieDetail" component={MovieDetail} />
       <Route  path="/booking" component={Booking} />
       <Route  component={NotFound}/>
       </Switch>
    </div>
    </Router>
    </Provider>,
  document.getElementById('root')
);

