import { useNavigate } from 'react-router-dom';

export default function MoviesCard(props) {
  let navigate = useNavigate();

  return (
    <div className="col">
      <div
        className="card"
        style={{
          width: '18rem',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: '5%',
        }}
      >
        <img src={props.movie.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <center>
            <label for="title">
              <b>{props.movie.title}</b>
            </label>
            <p className="card-text">{props.movie.synopsis}</p>
            <label for="trailer" style={{ fontSize: '14px' }}>
              Trailer:{props.movie.trailerUrl}
            </label>
            <br />
            <label for="rating">Rating: {props.movie.rating}</label>
            <div style={{ paddingTop: '5%' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate(`/movies/${props.movie.id}`)}
              >
                Details
              </button>
            </div>
            <div style={{ paddingTop: '5%' }}>
              <button type="button" className="btn btn-primary">
                Add to Watchlist
              </button>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
