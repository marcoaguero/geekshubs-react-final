import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchShows } from "../../service";
import Card from "../../components/Card";

const SearchShows = (props) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [shows, setShows] = useState([]);
  useEffect(() => {
    searchShows(query).then((res) => setShows(res.data.results));
  }, [query]);

  if (shows.length === 0) {
    return <h2 className="text-center m-2">Use searchbar on the nav menu</h2>;
  } else {
    return (
      <div>
        <div className="shows">
          <div className="d-flex flex-wrap">
            {shows?.map((show) => (
              <Card type={show} key={show.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default SearchShows;
