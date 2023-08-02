import { Link } from "react-router-dom";
import React from "react";

const Card = (props) => {
  const img_url = "https://image.tmdb.org/t/p/w500/";
  const image = img_url + props.item.poster_path;
  console.log(image);
  let titleRender = () => {
    if (props.typeObject === "movie") {
      return props.item.title;
    } else {
      return props.item.name;
    }
  };
  return (
    <div className="card col col-sm-3">
      <Link to={`/${props.genreUrl}details/` + props.item.id}>
        <img src={image} className="card-img-top" alt={titleRender()} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{titleRender()}</h5>
        <p className="card-text">{props.item.overview}</p>
      </div>
    </div>
  );
};
export default Card;
