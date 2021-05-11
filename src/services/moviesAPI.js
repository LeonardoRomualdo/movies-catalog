import axios from "axios"

export async function getMovie({
  search
}) {
  const { imdb_id, title, type, year, plot, data_type = 'json' } = search;
  let params = '';

  if (imdb_id) params += `i=${imdb_id}&`;
  if (title) params += `t=${title}&`;
  if (type) params += `type=${type}&`;
  if (year) params += `y=${year}&`;
  if (plot) params += `plot=${plot}&`;
  if (data_type) params += `r=${data_type}&`;

  let request = `${process.env.MOVIES_OMDB_API}&${params}`

  return await axios.get(request);
}

export async function searchMovies({
  search
}) {
  const { title, type, year, page, data_type = 'json' } = search;
  let params = '';
  
  if (title) params += `s=${title}&`;
  if (type) params += `type=${type}&`;
  if (year) params += `y=${year}&`;
  if (data_type) params += `r=${data_type}&`;
  if (page) params += `page=${page}&`;
  
  let request = `${process.env.MOVIES_OMDB_API}&${params}`
  
  return await axios.get(request);
}
