import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { search } from "../../service";
import { useSearchParams } from "react-router-dom";

const Search = (props) => {
  var searchUrl = `search/${props.searchUrl}`;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [items, setItems] = useState([]);
  useEffect(() => {
    search(query, searchUrl).then((res) => setItems(res.data.results));
  }, [query, searchUrl]);
  console.log(items);

  if (items.length === 0) {
    return <h2 className="text-center m-2">Use searchbar on the nav menu</h2>;
  } else {
    return (
      <div>
        <div id={props.type}>
          <div className="d-flex flex-wrap">
            {items?.map((item) => (
              <Card
                typeObject={props.type}
                genreUrl={props.genreUrl}
                item={item}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Search;
