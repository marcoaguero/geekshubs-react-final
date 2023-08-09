import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { fetch } from "../../service";
import { useParams } from "react-router";

const Grid = (props) => {
  const { category } = useParams();
  const typeObject = props.type;
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(props.genreUrl, category).then((res) => setItems(res.data.results));
  }, [props.genreUrl, category]);
  return (
    <div className={typeObject}>
      <h1 className="text-uppercase text-center">{category}</h1>
      <div className="d-flex flex-wrap flex-column flex-sm-row">
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
  );
};
export default Grid;
