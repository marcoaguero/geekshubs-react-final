import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../service";
import Card from "../../components/Card";

const SearchMovies = (props) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    searchMovies(query).then((res) => setMovies(res.data.results));
  }, [query]);

  if (movies.length === 0) {
    return <h2 className="text-center m-2">Use searchbar on the nav menu</h2>;
  } else {
    return (
      <div>
        <div className="movies">
          <div className="d-flex flex-wrap">
            {movies?.map((movie) => (
              <Card type={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default SearchMovies;
