import { useEffect } from 'react';
import MoviesCard from '../components/MoviesCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../store/actionCreator/movieAction';
import Swal from 'sweetalert2';
import loadingImage from '../screens/1.1-loading.jpg'
import errorImage from '../screens/1.2-error.jpg'

export default function MovieList() {
  const { movies, isLoading, error } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchMovies());
    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <center style={{ marginTop: '10%' }}>
        <img
          src={loadingImage}
          alt="imageLoading"
        />
      </center>
    );
  }

  if (error) {
    return (
      <center style={{ marginTop: '10%' }}>
        <img
          src={errorImage}
          alt="errorImage"
        />
      </center>
    );
  }
  return (
    <div className="container">
      <h1> Movie List</h1>
      <div className="row" style={{ marginTop: '5%' }}>
        <div className="cards">
          <div className="row">
            {movies.map((movie) => {
              return <MoviesCard key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
