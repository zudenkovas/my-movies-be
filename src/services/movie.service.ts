import axios from 'axios';

// Uncomment function and complete implementation. Function transforms ResponseMovie to Movie object
// const convertToMovie = (responseMovie: ResponseMovie): Movie => {
//   return {};
// };

const loadMovies = async (): Promise<Movie[]> => {
  await axios.get<Response>( // Store axios.get result into: const { data } =
    `https://api.themoviedb.org/3/trending/movie/week?sort_by=popularity.desc&api_key=${process.env.API_KEY}`,
  );

  return []; // Remove empty array with: data.results.map(convertToMovie);
};

export { loadMovies };
