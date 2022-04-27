import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import genreReducer from './genreReducer';

export default combineReducers({
  movie: movieReducer,
  genre: genreReducer,
});
