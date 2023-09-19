import { LoginContext } from "../usercontext/logincontext";
import style from "./plakater.module.scss";
import { useState, useEffect, useContext } from "react";

const Plakater = () => {
  const [movieData, setMovieData] = useState([]);
  const { user } = useContext(LoginContext);
  const [genresList, setGenresList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/poster/list")
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);

        const allGenres = data.reduce((genres, movie) => {
          movie.genres.forEach((genre) => {
            if (!genres.includes(genre.title)) {
              genres.push(genre.title);
            }
          });
          return genres;
        }, []);

        setGenresList(allGenres);
      })

      .catch((error) => {
        console.error("Error fetching", error);
      });
  }, []);

  console.log(movieData);

  const addToCart = (id) => {
    const url = "http://localhost:4000/cart";
    const body = new URLSearchParams();
    body.append("poster_id", id);
    body.append("quantity", "1");

    const options = {
      method: "POST",
      body: body,
      headers: { Authorization: `Bearer ${user.access_token}` },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const filterMoviesByGenre = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredMovies = selectedGenre
    ? movieData.filter((movie) =>
        movie.genres.some((genre) => genre.title === selectedGenre)
      )
    : movieData;
  

    return (
      <div className={style.movieGrid}>
        
        <div className={style.genreButtons}>
        <h1>Plakater</h1>
        <h2>Filtre</h2>
        <h4>Genre</h4>
          {genresList.map((genre, index) => (
           <div className={style.listWrapper}>
           <ul>
            <li
              key={index}
              onClick={() => filterMoviesByGenre(genre)}
              className={selectedGenre === genre ? style.active : ""}
            >
              {genre}
            </li></ul>
            </div>
          ))}
        </div>
  
        <div className={style.posterGrid}>
          {filteredMovies.slice(0, 9).map((movie, index) => (
            <div key={index} className={style.movieContainer}>
              
              <div className={style.movieContent}>
                <img src={movie.image} alt={`Movie ${index}`} />
                <div className={style.buttonContainer}>
                <h2>{movie.name}</h2>
                <h2>{movie.price}kr</h2>
              <button onClick={() => addToCart(movie.id)}>Læg i kurv</button>
              </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Plakater;
  