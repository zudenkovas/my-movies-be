import axios from 'axios';

import { convertToMovie, convertToMovieDetails } from '../converters/movie.converter';

interface MovieCache {
  [page: number]: Movie[];
  totalPages?: number;
}

interface MovieDetailsCache {
  [movieId: number]: MovieDetails;
}

const movies: MovieCache = {};
const movieDetails: MovieDetailsCache = {};

const loadMovies = async (page: number): Promise<Movies> => {
  if (!movies[page]) {
    const { data } = await axios.get<TmdbMovies>(
      `https://api.themoviedb.org/3/trending/movie/week?sort_by=popularity.desc&page=${page}&api_key=${process.env.API_KEY}`,
    );

    movies[page] = [];
    movies.totalPages = data.total_pages;
    data.results.map(convertToMovie).forEach((m) => movies[page].push(m));
  }

  return {
    page,
    movies: movies[page],
    totalPages: movies.totalPages || 0,
  };
};

const loadMovie = async (movieId: number): Promise<MovieDetails> => {
  if (!movieDetails[movieId]) {
    const { data } = await axios.get<TmdbMovieDetails>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
    );

    movieDetails[data.id] = convertToMovieDetails(data);
  }

  return movieDetails[movieId];
};

export { loadMovies, loadMovie };
