import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '853785bec96aab2b3c204dfdbe733ed3',
    language: 'es-MX',
  },
});

export default movieDB;
