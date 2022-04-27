// import {
//   SET_MOVIES,
//   SET_GENRES,
//   SET_SELECTED_MOVIE,
//   IS_ERROR,
//   IS_LOADING,
// } from '../actionTypes';

// export function setMovies(payload) {
//   return {
//     type: SET_MOVIES,
//     payload: payload,
//   };
// }

// export function selectedMovie(payload) {
//   return {
//     type: SET_SELECTED_MOVIE,
//     payload: payload,
//   };
// }

// export function setGenres(payload) {
//   return {
//     type: SET_GENRES,
//     payload: payload,
//   };
// }

// export function isLoading(payload) {
//   return {
//     type: IS_LOADING,
//     payload: payload,
//   };
// }

// export function isError(payload) {
//   return {
//     type: IS_ERROR,
//     payload: payload,
//   };
// }

// export const fetchMovies = () => (dispatch, getState) => {
//   dispatch(isLoading(true));
//   fetch(' http://localhost:3000/movies', {
//     method: 'GET',
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     })
//     .then((movies) => {
//       dispatch(setMovies(movies));
//       dispatch(isLoading(false));
//     })
//     .catch((error) => {
//       dispatch(isError(error));
//     });
// };

// export const fetchSelectedMovie = (id) => (dispatch, getState) => {
//   dispatch(isLoading(true));
//   fetch(`http://localhost:3000/movies/${id}`, {
//     method: 'GET',
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     })
//     .then((movie) => {
//       dispatch(selectedMovie(movie));
//       dispatch(isLoading(false));
//     })
//     .catch((error) => {
//       dispatch(isError(error));
//     });
// };

// export const fetchGenres = () => (dispatch, getState) => {
//   dispatch(isLoading(true));
//   fetch(' http://localhost:3000/genres', {
//     method: 'GET',
//     headers: {
//       access_token: localStorage.getItem('access_token'),
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     })
//     .then((genre) => {
//       dispatch(setGenres(genre));
//       dispatch(isLoading(false));
//     })
//     .catch((error) => {
//       dispatch(isError(error));
//     });
// };
