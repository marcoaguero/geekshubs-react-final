import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Details from "./containers/Details/Details";
import Grid from "./containers/Grid/Grid";
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar";
import Search from "./containers/Search/Search";

function App() {
  const typeObject = useSelector((state) => state.value);
  var genreUrl = "";
  var typeText = "";
  var searchUrl = "";
  if (typeObject === "movie") {
    genreUrl = "movie/";
    searchUrl = "movie";
    typeText = "Movies";
  } else {
    genreUrl = "tv/";
    searchUrl = "tv";
    typeText = "TV Shows";
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar type={typeObject} url={genreUrl} text={typeText} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:typeObject/:category"
            element={<Grid type={typeObject} genreUrl={genreUrl} />}
          />
          <Route
            path="/:typeObject/search"
            element={
              <Search
                type={typeObject}
                genreUrl={genreUrl}
                searchUrl={searchUrl}
              />
            }
          />
          <Route
            path="/:typeObject/details/:id"
            element={<Details type={typeObject} genreUrl={genreUrl} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
