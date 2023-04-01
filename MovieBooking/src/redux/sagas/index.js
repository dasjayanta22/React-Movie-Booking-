import { put , takeLatest, all } from 'redux-saga/effects';
import { baseURL } from '../../constant';


const API_KEY = "31354ed59faeede2a7c1d46c6fed6a53";
// const baseURL = "https://api.themoviedb.org/3";

const request = {
  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US`
}


// worker sagas
function* getTrendingMovies(){
    const records = yield fetch(request.fetchTrending)
    .then(response => response.json());
    yield put({type:"TRENDING_MOVIES_RECEIVED", movies : records})
}

function* getLatestMovies(){
    const records = yield fetch(request.fetchTopRated)
    .then(response => response.json());
    yield put({type:"LATEST_MOVIES_RECEIVED", movies : records})
}


function* getPopular(){
    const records = yield fetch(request.fetchPopular)
    .then(response => response.json());
    yield put({type:"POPULAR_MOVIES_RECEIVED", movies : records})
}


function* searchMovies(obj){
    const records = yield fetch(`${baseURL}/search/movie?api_key=${API_KEY}&query=${obj.payload}&language=en-US&sort_by=popularity.desc&include_adult=false`)
    .then(response => response.json());
    yield put({type:"SEARCHED_MOVIES_RECEIVED", movies : records})
}



// watcher saga
function* actionWatcher(){
    yield takeLatest('GET_TRENDING_MOVIES', getTrendingMovies)
    yield takeLatest('LATEST_MOVIES', getLatestMovies)
    yield takeLatest('GET_POPULAR_MOVIES', getPopular)
    yield takeLatest('SEARCH_MOVIES', searchMovies)
}

// root saga
export default function* rootSaga(){
    yield all([actionWatcher()])
}

