import {
  SET_MOVIES,
  SET_SELECTED_MOVIE,
  IS_ERROR,
  IS_LOADING,
} from '../actionTypes';
import { baseUrl } from '../helpers/baseUrl';

export function setMovies(payload) {
  return {
    type: SET_MOVIES,
    payload: payload,
  };
}

export function selectedMovie(payload) {
  return {
    type: SET_SELECTED_MOVIE,
    payload: payload,
  };
}

export function isLoading(payload) {
  return {
    type: IS_LOADING,
  };
}

export function isError(payload) {
  return {
    type: IS_ERROR,
    payload: payload,
  };
}

export const fetchMovies = () => (dispatch, getState) => {
  dispatch(isLoading());
  fetch(`${baseUrl}/movies`, {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((movies) => {
      dispatch(setMovies(movies));
    })
    .catch((error) => {
      dispatch(isError(error));
    });
};

export const fetchSelectedMovie = (id) => (dispatch, getState) => {
  dispatch(isLoading());
  fetch(`${baseUrl}/movies/${id}`, {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((movie) => {
      dispatch(selectedMovie(movie));
    })
    .catch((error) => {
      dispatch(isError(error));
    });
};
