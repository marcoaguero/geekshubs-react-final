import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card";
import { fetchMovies } from "../../service";

const Movies = (props) => {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies(category).then((res) => setMovies(res.data.results));
  }, [category]);
  return (
    <div className="movies">
      <h1 className="text-uppercase text-center">{category}</h1>
      <div className="d-flex flex-wrap">
        {movies?.map((movie) => (
          <Card type={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
export default Movies;
