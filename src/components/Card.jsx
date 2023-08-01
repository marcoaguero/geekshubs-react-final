import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const img_url = "https://image.tmdb.org/t/p/w500/";
  const image = img_url + props.item.poster_path;
  console.log(image);
  if (props.typeObject === "movie") {
    return (
      <div className="card col-3">
        <Link to={`/movie/details/` + props.item.id}>
          <img src={image} className="card-img-top" alt={props.item.title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <p className="card-text">{props.item.overview}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card col-3">
        <Link to={`/tv/details/` + props.item.id}>
          <img src={image} className="card-img-top" alt={props.item.name} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p className="card-text">{props.item.overview}</p>
        </div>
      </div>
    );
  }
};
export default Card;
