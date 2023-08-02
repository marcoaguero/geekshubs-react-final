# React project using MovieDB API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run the project

After cloning you can run on the folder directory

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Introduction

First of all I used the create react app boiler plate.

After that installed the minimum modules as requested by the assingment which were:

### Modules

Axios for fetching data through API http requests and promises
Redux Toolkit for state management. Used RTK to reduce boilerplate code and simplify actions/reducers as this project uses 2 single global states (movie or tv show)
Bootstrap as styling framework. I'm quite familiar with the classes and breakpoints so it's easy to simplify responsiveness without getting nitpicky
Redux persist to store the state value locally so when we refresh the page or stop running locally the state will be stored on the local storage
React router for routing in react, sorry for the redundancy

### States - TV or MOVIE

Once the state is set on the store at src/stores/typeStore.js all nav routes will have either movie/ or tv/ respectively and that will determine the API calls URL.

### API calls

I simplified the API calls at src/service/index.js to 2 different calls:

fetch: which gives movie lists/item details
search: which searches once the query is fulfilled on the nav search bar

### Containers

The page components or containers (how I called the folder) are simply 4

Home: will be this one and includes what would be the readme file
Grids:
typeofUrl/popular: grid for populars
typeofUrl/top_rated: grid for top rateds
Search: which shows a message when items.length===0 which means no API call where made so state is empty and turns into a Grid page once there's items once query is set and API call is successful
Details: shows the movie details with some information

### Components

Card: shows the item card with the image on top, title and description beneath
Navbar: menu bar which changes the urls depending on the typeObject
Searchbar: form with button included within the Navbar which leads to the search page and has the logic and event to get the query into the search API call and navigate to the search page with the fulfilled results

### Challenges

Through the project I had to deal with some issues such as the title and released date being handled differently in the responses. I created a conditional on the card and details page depending on the typeObject (movie or tv show) will return on value type or another.

I tried to follow the DRY principle (don't repeat yourself) which I originally didn't follow as I had repetitive code everywhere. Ended up reducing it to how it is now. I believe there can be improvements but I'm satisfied with the current outcome.

The project has different branches where you can compare the original version with many different components and how it evolved through the past couple of days.

### Contact

Feel free to reach out to me for any doubts or comments to my email marcoaguerocalderon@gmail.com or contact me through slack @Marco Aguero
