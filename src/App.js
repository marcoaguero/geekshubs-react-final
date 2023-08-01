import NavBar from "./components/NavBar";
import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";
import Grid from "./containers/Grid/Grid";
import Details from "./containers/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const typeObject = useSelector((state) => state.value);
  var genreUrl = "";
  var typeText = "";
  if (typeObject === "movie") {
    genreUrl = "movie/";
    typeText = "Movies";
  } else {
    genreUrl = "tv/";
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
            element={<Search type={typeObject} />}
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
