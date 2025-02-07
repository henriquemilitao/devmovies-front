import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Slider } from '../../components/Slider';
import {
  getNowPlaying,
  getPopular,
  getReleasedSoon,
  getTopRated,
} from '../../services/getData';
import { getImages } from '../../utils/getImages';
import {
  Background,
  Container,
  Poster,
  Info,
  ContainerButtons,
} from './styles';

export function Movies() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [releasedSoon, setReleasedSoon] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getPopular('movie'),
        getTopRated('movie'),
        getNowPlaying('movie'),
        getReleasedSoon('movie'),
      ]).then(([movies, topMovies, nowPlaying, releasedSoon]) => {
        setMovie(movies[0]);
        setTopMovies(topMovies);
        setPopularMovies(movies);
        setNowPlaying(nowPlaying);
        setReleasedSoon(releasedSoon);
      });
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button
                  red
                  onClick={() => navigate(`/detalhes/movie/${movie.id}`)}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && (
        <Slider title="Sucesso" info={topMovies} type="movie"></Slider>
      )}

      {popularMovies && (
        <Slider title="Em Alta" info={popularMovies} type="movie"></Slider>
      )}

      {nowPlaying && (
        <Slider title="Nos Cinemas" info={nowPlaying} type="movie"></Slider>
      )}

      {releasedSoon && (
        <Slider title="Em Breve" info={releasedSoon} type="movie"></Slider>
      )}
    </>
  );
}
