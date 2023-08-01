import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card";
import { fetch } from "../../service";

const Grid = (props) => {
  const { category } = useParams();
  const typeObject = props.type;
  console.log(typeObject);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(props.genreUrl, category).then((res) => setItems(res.data.results));
  }, [props.genreUrl, category]);
  return (
    <div className={typeObject}>
      <h1 className="text-uppercase text-center">{category}</h1>
      <div className="d-flex flex-wrap">
        {items?.map((item) => (
          <Card typeObject={props.type} item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default Grid;
