import { IS_LOADING, SET_GENRES, IS_ERROR } from '../actionTypes';

const initialState = {
  genres: [],
  isLoading: false,
  error: null,
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
        isLoading: false,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case IS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
