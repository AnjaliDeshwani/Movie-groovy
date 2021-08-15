import "./styles.css";
import React, { useState } from "react";

const moviesList = {
  sci_fi: [
    { movieName: "The Matrix", year: 1999, IMDb: "8.7 / 10" },
    { movieName: "Inception", year: 2010, IMDb: "8.8 / 10" },
    { movieName: "Interstellar ", year: 2014, IMDb: "8.6 / 10" }
  ],
  romantic: [
    { movieName: "The Notebook", year: 2004, IMDb: "7.8 / 10" },
    { movieName: "The Vow", year: 2012, IMDb: "6.8 / 10" },
    { movieName: "Me Before You", year: 2004, IMDb: "7.4 / 10" }
  ],
  horror: [
    { movieName: "The Conjuring", year: 2013, IMDb: "7.3 / 10" },
    { movieName: "Hereditary", year: 2018, IMDb: "7.3 / 10" },
    { movieName: "Sinister", year: 2012, IMDb: "6.8 / 10" }
  ]
};

export default function App() {
  const [clickedMovieGenre, setMovieGenre] = useState("horror");

  function genreHandler(genre) {
    setMovieGenre(genre);
    const el1 = document.querySelector(".movie-list");
    el1.style.display = "block";

    const el2 = document.querySelector(".clear-btn");
    el2.style.display = "block";
  }

  function clearHandler() {
    const el1 = document.querySelector(".movie-list");
    el1.style.display = "none";

    const el2 = document.querySelector(".clear-btn");
    el2.style.display = "none";
  }

  return (
    <div className="App">
      <h1>Movie-Groovy 🎬 </h1>
      <h3> 🍿 Click on below generes to find out best movies.🍿</h3>
      {Object.keys(moviesList).map((genre) => (
        <button
          onClick={() => genreHandler(genre)}
          style={{
            border: "1px solid #3B82F6",
            cursor: "pointer",
            borderRadius: "0.5rem",
            background: "white",
            padding: "0.5rem 1rem",
            margin: "0.5rem",
            color: ""
          }}
        >
          {genre} ⬇️
        </button>
      ))}

      <ul
        className="movie-list"
        style={{
          display: "none"
        }}
      >
        <li
          style={{
            listStyle: "none",
            fontWeight: 800
          }}
        >
          {clickedMovieGenre.toUpperCase()} movies are listed below
        </li>
        {moviesList[clickedMovieGenre].map((movie) => (
          <li
            style={{
              listStyle: "none",
              border: "2px solid #3B82F6"
            }}
          >
            <div>{movie.movieName}</div>
            <div style={{ color: "#9CA3AF" }}>
              Year-<span style={{ color: "#3B82F6" }}>{movie.year}</span>
            </div>
            <div style={{ color: "#9CA3AF" }}>
              IMDb rating-<span style={{ color: "#3B82F6" }}>{movie.IMDb}</span>
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={clearHandler}
        className="clear-btn"
        style={{
          color: "#3B82F6",
          height: "28px",
          textAlign: "center",
          backgroundColor: "#F8F8F8",
          borderRadius: "9px",
          border: "2px solid #E8E8E8",
          width: "100px",
          marginLeft: "588px",
          marginTop: "40px",
          display: "none"
        }}
      >
        Clear
      </button>
    </div>
  );
}
