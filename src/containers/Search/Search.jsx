import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { search } from "../../service";
import Card from "../../components/Card";

const Search = (props) => {
  const searchMovieUrl = "search/movie";
  const searchShowUrl = "search/tv";
  var searchUrl = "";
  if (props.type === "movie") {
    searchUrl = searchMovieUrl;
  } else {
    searchUrl = searchShowUrl;
  }
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [items, setItems] = useState([]);
  useEffect(() => {
    search(query, searchUrl).then((res) => setItems(res.data.results));
  }, [query, searchUrl]);

  if (items.length === 0) {
    return <h2 className="text-center m-2">Use searchbar on the nav menu</h2>;
  } else {
    return (
      <div>
        <div id={props.type}>
          <div className="d-flex flex-wrap">
            {items?.map((item) => (
              <Card type={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Search;
