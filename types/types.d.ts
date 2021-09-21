interface Movie {
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
