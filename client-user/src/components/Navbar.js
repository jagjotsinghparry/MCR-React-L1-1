import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGenres } from '../store/actionCreator/genreAction';
export default function Navbar() {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genre);

  useEffect(() => {
    dispatch(fetchGenres());
    //eslint-disable-next-line
  }, []);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Movie
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {genres.map((genre) => {
              return (
                <li class="nav-item">
                  <Link class="nav-link" to="/genres">
                    {genre.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div class="d-flex" style={{ paddingLeft: '1vh' }}></div>
        </div>
      </div>
    </nav>
  );
}
