import React from 'react';
import { Link, NavLink } from "react-router-dom";
import MovieList from "./MovieList";



const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie" key={movie.id}><NavLink to={`/movie-list/${movie.id}`} activeClassName="activeNavButton">{movie.title}</NavLink ></span>
    ))}
    
    <Link to="/" component={MovieList}>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
