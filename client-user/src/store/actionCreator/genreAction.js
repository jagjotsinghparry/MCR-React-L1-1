import { SET_GENRES, IS_ERROR, IS_LOADING } from '../actionTypes';
import { baseUrl } from '../helpers/baseUrl';

export function setGenres(payload) {
  return {
    type: SET_GENRES,
    payload: payload,
  };
}

export function isLoading(payload) {
  return {
    type: IS_LOADING,
    payload: payload,
  };
}

export function isError() {
  return {
    type: IS_ERROR,
  };
}

export const fetchGenres = () => (dispatch, getState) => {
  dispatch(isLoading());
  fetch(`${baseUrl}/genres/user`, {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((genre) => {
      dispatch(setGenres(genre));
    })
    .catch((error) => {
      dispatch(isError(error));
    });
};
