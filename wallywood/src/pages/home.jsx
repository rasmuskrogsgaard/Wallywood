import style from "./home.module.scss";
import { useState, useEffect } from "react";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/poster/list")
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
      })

      .catch((error) => {
        console.error("Error fetching", error);
      });
  }, []);

  const fetchMovieDetails = async (slug) => {
    try {
      const response = await fetch(
        `http://localhost:4000/poster/details/${slug}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const movieDetails = await response.json();
      return movieDetails;
    } catch (error) {
      console.error("Error fetching movie details", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchDetailsForMovies = async () => {
      const detailsPromises = movieData.map((movie) =>
        fetchMovieDetails(movie.slug)
      );
      const details = await Promise.all(detailsPromises);
      setMovieDetails(details);
    };

    fetchDetailsForMovies();
  }, [movieData]);

  return (
    <div className={style.homecontent}>
      <img
        className={style.styleImg}
        src="../src/assets/hero-b.jpg"
        alt="Hero"
      />
      <h1>Sidste Nyt</h1>

      <div className={style.gridContainer}>
        {movieData.slice(0, 2).map((movie, index) => (
          <div className={style.gridItem} key={index}>
            <img src={movie.image} alt={`Movie ${index}`} />
            <div className={style.movieInfo}>
              <h2>{movie.name}</h2>

              {movie.genres.map((genre) => (
                <p key={genre.id}>Genre: {genre.title}</p>
              ))} 
                <p>{movieDetails[index]?.description}</p>
              <button>Læs mere </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
