import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSelectedMovie } from '../store/actionCreator/movieAction';
import Swal from 'sweetalert2';
import loadingImage from '../screens/1.1-loading.jpg'
import errorImage from '../screens/1.2-error.jpg'


export default function MovieDetail() {
  const { movie, isLoading, error } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSelectedMovie(params.id));
    // eslint-disable-next-line
  }, [params.id]);

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
    <div className="container" style={{ marginTop: '5%' }}>
      <center>
        <h1>Detail Movie</h1>
        <br />
        <div id="image">
          <div className="row" style={{ width: '50%', height: '10%' }}>
            <img src={movie.imgUrl} alt="" className="card-img-top" />
          </div>
        </div>
        <div className="col-12">
          <div className="card-body">
            <div className="row" style={{ backgroundColor: 'white' }}>
              <div className="col">
                <br />
                <br />
                <label for="rating">Rating: {movie.rating} </label>
              </div>
            </div>
          </div>
        </div>
        <div id="isi">
          <div className="row">
            <label for="title">
              <b>{movie.title}</b>
            </label>
            <p className="card-text">{movie.synopsis}</p>
            <label for="trailer">Trailer: {movie.trailerUrl}</label>
          </div>
        </div>
      </center>
    </div>
  );
}
