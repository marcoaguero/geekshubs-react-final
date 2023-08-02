import React, { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/${props.typeObject}/search?q=${search}`);
    setSearch("");
  };
  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        aria-label="Search"
      />
      <button className="btn btn-outline-secondary" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
