import { AppError } from "../error";
import { TmovieSchema } from "../interfaces/movies.interfaces";
import { movieSchema } from "../schemas/movies.schema";
import { getRepositoryMovies } from "../server";

export const getMoviesService = async (
  order: string | null,
  sort: string | null,
  perPage: any,
  page: any
) => {
  let reqMovie = {};

  let nextPage = null;
  let prevPage = null;

  const baseUrl: string = "http://localhost:3000/movies";

  if (perPage > 5 || perPage < 0 || !perPage) perPage = 5;
  if (page < 0 || !page) page = 1;

  if (!sort) {
    reqMovie = {
      skip: (page - 1) * perPage,
      take: perPage,
      order: {
        id: "asc",
      },
    };
  } else {
    reqMovie = {
      skip: (page - 1) * perPage,
      take: perPage,
      order: {
        [sort]: order,
      },
    };
  }

  const [data, count] = await getRepositoryMovies.findAndCount(reqMovie);

  if (count > page * perPage)
    nextPage = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;
  if ((page * perPage) / 5 > 1)
    prevPage = `${baseUrl}?page=${page - 1}&perPage=${perPage}`;
  return {
    prevPage,
    nextPage,
    count,
    data,
  };
};
