const loadMovies = (): Movie[] => {
  //  Load movies from URL: https://api.themoviedb.org/3/trending/movie/week?sort_by=popularity.desc&api_key=${process.env.API_KEY}
  return []; // Return loaded movies as a result
};

export { loadMovies };
