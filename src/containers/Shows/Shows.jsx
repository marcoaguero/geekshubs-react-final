import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card";
import { fetchShows } from "../../service";

const Shows = (props) => {
  const { category } = useParams();
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetchShows(category).then((res) => setShows(res.data.results));
  }, [category]);
  return (
    <div className="shows">
      <h1 className="text-uppercase text-center">{category}</h1>
      <div className="d-flex flex-wrap">
        {shows?.map((show) => (
          <Card type={show} key={show.id} />
        ))}
      </div>
    </div>
  );
};
export default Shows;
