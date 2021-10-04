interface TmdbMovies {
  page: number;
  total_pages: number;
  results: TmdbMovie[];
}

interface TmdbMovie {
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
}

interface Genre {
  id: number;
}

interface TmdbProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCompany {
  id: number;
  logoPath: string;
  name: string;
  originCountry: string;
}

interface TmdbProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface ProductionCountry {
  iso: string;
  name: string;
}

interface TmdbSpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface SpokenLanguage {
  englishName: string;
  iso: string;
  name: string;
}

interface TmdbMovieDetails extends TmdbMovie {
  budget: number;
  genres: Genre[];
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  production_companies: TmdbProductionCompany[];
  production_countries: TmdbProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: TmdbSpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  vote_count: number;
}

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  backdropPath: string;
  posterPath: string;
  voteAverage: number;
}

interface MovieDetails extends Movie {
  budget: number;
  genres: Genre[];
  homepage: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spokenLanguages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  voteCount: number;
}

interface ResponseMovies {
  page: number;
  totalPages: number;
  movies: Movie[];
}
