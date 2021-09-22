interface Response {
  results: ResponseMovie[];
}

interface ResponseMovie {
  id: number;
  title: string;
  release_date: string;
  original_language: string;
  overview: string;
  genre_ids: number[];
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  originalLanguage: string;
  overview: string;
  genreIds: number[];
  adult: boolean;
  backdropPath: string;
  posterPath: string;
  voteAverage: number;
  voteCount: number;
  popularity: number;
}
