import axios from 'axios';

interface MovieCache {
  [movieId: number]: Movie;
}

const movies: MovieCache = {};

const convertToMovie = (responseMovie: ResponseMovie): Movie => {
  return {
    id: responseMovie.id,
    title: responseMovie.title,
    releaseDate: responseMovie.release_date,
    originalLanguage: responseMovie.original_language,
    overview: responseMovie.overview,
    genreIds: responseMovie.genre_ids,
    adult: responseMovie.adult,
    backdropPath: responseMovie.backdrop_path,
    posterPath: responseMovie.poster_path,
    voteAverage: responseMovie.vote_average,
    voteCount: responseMovie.vote_count,
    popularity: responseMovie.popularity,
  };
};

const loadMovies = async (): Promise<Movie[]> => {
  if (Object.keys(movies).length === 0) {
    console.log('aaa');
    const { data } = await axios.get<Response>(
      `https://api.themoviedb.org/3/trending/movie/week?sort_by=popularity.desc&api_key=${process.env.API_KEY}`,
    );

    data.results.map(convertToMovie).forEach((m) => (movies[m.id] = m));
  }

  return Object.values(movies);
};

export { loadMovies };
