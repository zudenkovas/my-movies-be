import { PAGE_SIZE } from '../commons';
import { MovieModel } from '../models/movie';

const getPersonalMovies = async (userEmail: string, page: number): Promise<Movies> => {
  const { docs, totalPages } = await MovieModel.paginate(
    { email: userEmail },
    { offset: (page - 1) * PAGE_SIZE, limit: PAGE_SIZE },
  );

  return {
    page,
    movies: docs,
    totalPages,
  };
};

const savePersonalMovie = async (movie: Movie): Promise<Movie> => {
  const result = await new MovieModel(movie).save();

  return result;
};

const deletePersonalMovie = async (id: string, email: string): Promise<boolean> => {
  await MovieModel.deleteOne({ _id: id, email });

  return true;
};

export { getPersonalMovies, savePersonalMovie, deletePersonalMovie };
