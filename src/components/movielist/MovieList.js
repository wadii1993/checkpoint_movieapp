import React from "react";
import MovieCard from "../moviecard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movie, del, search }) => {
  return (
    <div className="movieliste">
      {movie.map((el) => (
        <MovieCard key={el.id} el={el} del={del} />
      ))}
    </div>
  );
};

export default MovieList;
