import React, { useEffect, useState } from "react";
import { fetch } from "../../service";
import { useParams } from "react-router";

const Details = (props) => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const img_url = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    fetch(props.genreUrl, id).then((res) => setItem(res.data));
  }, [id]);
  let titleRender = () => {
    if (props.type === "movie") {
      return item.title;
    } else {
      return item.name;
    }
  };
  let dateRender = () => {
    if (props.type === "movie") {
      return item.release_date;
    } else {
      return item.first_air_date;
    }
  };
  return (
    <div>
      <div className="details">
        <div className="d-flex flex-wrap">
          <div className="card m-auto mt-sm-3" style={{ border: "none" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={img_url + item.poster_path}
                  className="card-img-top"
                  alt={item.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title text-uppercase">{titleRender()}</h2>
                  <p className="card-text">{item.overview}</p>
                  <p className="fw-bold">Release date: {dateRender()}</p>
                  <a
                    href={item.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="link-secondary"
                  >
                    Read more...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
