import React from "react";

const Home = (props) => {
  return (
    <div className="container ">
      <h2 className="text-center">React project using MovieDB API</h2>
      <div>
        <p>First of all I used the create-react-app boiler plate.</p>
        <p>
          After that installed the minimum modules as requested by the
          assingment which were:
        </p>
        <ul>
          <li>
            <strong>Axios</strong> for fetching data through API http requests
            and promises
          </li>
          <li>
            <strong>Redux Toolkit</strong> for state management. Used RTK to
            reduce boilerplate code and simplify actions/reducers as this
            project uses 2 single global states (movie or tv show)
          </li>
          <li>
            <strong>Bootstrap</strong> as styling framework. I'm quite familiar
            with the classes and breakpoints so it's easy to simplify
            responsiveness without getting nitpicky
          </li>
          <li>
            <strong>Redux persist </strong>to store the state value locally so
            when we refresh the page or stop running the server locally the
            state will be stored on the local storage
          </li>
          <li>
            <strong>React router</strong> for routing in react, sorry for the
            redundancy
          </li>
        </ul>
        <p>
          Once the state is set on the store at
          <span>
            <em>src/stores/typeStore.js</em>{" "}
          </span>
          all nav routes will have either{" "}
          <em>
            <strong>movie/</strong>
          </em>{" "}
          or{" "}
          <strong>
            <em>tv/</em>
          </strong>{" "}
          respectively and that will determine the API calls URL.
        </p>
        <p>
          I simplified the API calls at{" "}
          <em>
            src<span>/service/index.js</span>
          </em>{" "}
          to 2 different calls:
        </p>
        <ul>
          <li>fetch: which gives movie lists/item details</li>
          <li>
            search: which searches once the query is fulfilled on the nav search
            bar
          </li>
        </ul>
        <p>
          The page components or containers (how I called the folder) are simply
          4
        </p>
        <ul>
          <li>
            <strong>Home</strong>: will be this one and includes what would be
            the readme file
          </li>
          <li>
            <strong>Grids</strong>:
            <ul>
              <li>
                <span>typeofUrl/popular</span>: grid for populars
              </li>
              <li>
                <span>typeofUrl/top_rated</span>: grid for top rateds
              </li>
            </ul>
          </li>
          <li>
            <strong>Search</strong>: which shows a message when{" "}
            <em>items.length===0</em> which means no API call where made so
            state is empty and turns into a Grid page once there's items once
            query is set and API call is successful
          </li>
          <li>
            <strong>Details</strong>: shows the movie details with some
            information
          </li>
        </ul>
        <p>The other basic components are:</p>
        <ul>
          <li>
            <strong>Card</strong>: shows the item card with the image on top,
            title and description beneath
          </li>
          <li>
            <strong>Navbar</strong>: menu bar which changes the urls depending
            on the <em>typeObject</em>
          </li>
          <li>
            <strong>Searchbar</strong>: form with button included within the
            Navbar which leads to the search page and has the logic and event to
            get the query into the search API call and navigate to the search
            page with the fulfilled results
          </li>
        </ul>
        <p>
          Through the project I had to deal with some issues such as the title
          and released date being handled differently in the responses. I
          created a conditional on the card and details page depending on the
          typeObject (movie or tv show) will return on value type or another.
        </p>
        <p>
          I tried to follow the DRY principle (don't repeat yourself) which I
          originally didn't follow as I had repetitive code everywhere. Ended up
          reducing it to how it is now. I believe there can be improvements but
          I'm satisfied with the current outcome.
        </p>
        <p>
          The project has different branches where you can compare the original
          version with many different components and how it evolved through the
          past couple of days.
        </p>
        <p> </p>
        <p>
          Feel free to reach out to me for any doubts or comments to my email{" "}
          <a href="mailto:marcoaguerocalderon@gmail.com">
            marcoaguerocalderon@gmail.com
          </a>{" "}
          or contact me through slack @Marco Aguero
        </p>
        <p> </p>
      </div>
    </div>
  );
};
export default Home;
