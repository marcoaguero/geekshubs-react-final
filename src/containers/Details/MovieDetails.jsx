import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovies } from "../../service";

const MovieDetails = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const img_url = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    fetchMovies(id)
      .then((res) => setMovie(res.data))
      .then();
    console.log(movie);
  }, [id]);
  const image = img_url + movie.poster_path;
  return (
    <div>
      <div className="detailMovie">
        <div className="d-flex flex-wrap">
          <div className="card col-3">
            <img src={image} className="card-img-top" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
