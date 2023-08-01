import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchShows } from "../../service";

const ShowDetails = (props) => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const img_url = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    fetchShows(id).then((res) => setShow(res.data));
  }, []);
  return (
    <div>
      <div className="detailMovie">
        <div className="d-flex flex-wrap">
          <div className="card col-3">
            <img
              src={img_url + show.poster_path}
              className="card-img-top"
              alt={show.title}
              onError={(e) => (e.target.style.display = "none")}
            />
            <div className="card-body">
              <h5 className="card-title">{show.title}</h5>
              <p className="card-text">{show.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
