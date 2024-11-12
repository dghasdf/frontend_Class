const API_KEY = "614428ff400eba97e5092d23db62b6bd";
const BASE_PATH = "https://api.themoviedb.org/3";

interface Movie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  original_title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  adult: boolean;
}

export interface getMoviesResult {
  dates: {
    maximum: string;
    minmun: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  tiotal_results: number;
}

export const getMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-kr`
  ).then((response) => response.json());
};
