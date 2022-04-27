import {
  SET_MOVIES,
  SET_SELECTED_MOVIE,
  IS_LOADING,
  IS_ERROR,
} from '../actionTypes';

const initialState = {
  movies: [],
  movie: {},
  isLoading: false,
  error: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case SET_SELECTED_MOVIE:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case IS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
