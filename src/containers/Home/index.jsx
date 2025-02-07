import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Slider } from '../../components/Slider';
import { getPopular, getTopRated } from '../../services/getData';
import { getImages } from '../../utils/getImages';
import {
  Background,
  Container,
  Poster,
  Info,
  ContainerButtons,
} from './styles';

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularArtists, setPopularArtists] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getPopular('movie'),
        getTopRated('movie'),
        getTopRated('tv'),
        getPopular('tv'),
        getPopular('person'),
      ]).then(
        ([movie, topMovies, topSeries, popularSeries, popularArtists]) => {
          setMovie(movie[0]);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setPopularArtists(popularArtists);
        },
      );
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
                  Mais Detalhes
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
        <Slider
          title="Filmes de Sucesso"
          info={topMovies}
          type="movie"
        ></Slider>
      )}
      {topSeries && (
        <Slider title="Séries de Sucesso" info={topSeries} type="tv"></Slider>
      )}
      {popularSeries && (
        <Slider title="Séries em Alta" info={popularSeries} type="tv"></Slider>
      )}
      {popularArtists && (
        <Slider
          title="Artistas em Alta"
          info={popularArtists}
          type="person"
        ></Slider>
      )}
    </>
  );
}
