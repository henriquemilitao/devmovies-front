import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Slider } from '../../components/Slider';
import {
  getAiringToday,
  getOntheAir,
  getPopular,
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

export function Series() {
  const [showModal, setShowModal] = useState(false);
  const [serie, setSerie] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([getPopular('tv'), getTopRated('tv')]).then(
        ([series, topSeries]) => {
          setSerie(series[1]);
          setTopSeries(topSeries);
          setPopularSeries(series);
        },
      );
    }

    getAllData();
  }, []);

  return (
    <>
      {serie && (
        <Background $img={getImages(serie.backdrop_path)}>
          {showModal && (
            <Modal serieId={serie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{serie.name}</h1>
              <p>{serie.overview}</p>
              <ContainerButtons>
                <Button
                  red
                  onClick={() => navigate(`/detalhes/tv/${serie.id}`)}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(serie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topSeries && (
        <Slider title="Sucesso" info={topSeries} type="tv"></Slider>
      )}

      {popularSeries && (
        <Slider title="Em Alta" info={popularSeries} type="tv"></Slider>
      )}
    </>
  );
}
