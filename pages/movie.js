import React from "react";
import MovieItem from "../Component/MovieItem";

const Movie = ({ movies }) => {
  const movies_list = movies.data;

  console.log(movies_list)
  return(
    <div>
      {movies_list.map((movie, index) => {
        return(
          <MovieItem
            key={index}
            title={movie.attributes.title}
            duration={movie.attributes.duration}
            release_date={movie.attributes.release_date}
            genres={movie.attributes.genres}
          />
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  const url = 'http://127.0.0.1:1337/api/movies?populate=*';
  const response = await fetch(url, { headers: { Authorization: `${process.env.STRAPI_API_KEY}` } });
  const movies = await response.json();

  return {
    props: {
      movies
    }
  }
}

export default Movie;