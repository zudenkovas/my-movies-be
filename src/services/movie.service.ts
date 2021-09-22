const loadMovies = async (): Promise<Movie[]> => {
  // Load movies from URL: `https://api.themoviedb.org/3/trending/movie/week?sort_by=popularity.desc&api_key=${process.env.API_KEY}`
  // use: await axios.get<Response>(url)
  // convert ResponseMovie objects to Movie objects and return as result
  return [];
};

export { loadMovies };
