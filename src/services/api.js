import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzQ4OWRjOGI1NGFiZThiZjNhZDYwMWVkZWM5YmE1NSIsIm5iZiI6MTczMzMyMDIzOS4yNTgsInN1YiI6IjY3NTA1ZTJmNjU2NzAyYTc5MmZmYmEwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8gSGMaj7yy1GdFP2nh_NTF42tFy83qfpQVqsQB2lgU',
  },
  params: {
    language: 'pt-BR',
    page: 1,
  },
});
