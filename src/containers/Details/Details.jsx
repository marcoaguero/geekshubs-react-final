import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetch } from "../../service";

const Details = (props) => {
  const { id } = useParams();
  // // const movieUrl = "movie/";
  // // const tvUrl = "tv/";
  // var genreUrl = "";
  const [item, setItem] = useState({});
  const img_url = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    fetch(props.genreUrl, id).then((res) => setItem(res.data));
  }, [id]);
  if (props.type === "movie") {
    return (
      <div>
        <div className="detailMovie">
          <div className="d-flex flex-wrap">
            <div className="card col-3">
              <img
                src={img_url + item.poster_path}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="detailMovie">
          <div className="d-flex flex-wrap">
            <div className="card col-3">
              <img
                src={img_url + item.poster_path}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
