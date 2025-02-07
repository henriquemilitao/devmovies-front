import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Slider } from '../../components/Slider';
import {
  getActorImages,
  getDetails,
  getMovieCredits,
  getTvCredits,
} from '../../services/getData';
import { calculateAge } from '../../utils/calculateAge';
import { formatDate } from '../../utils/formatDate';
import { getImages } from '../../utils/getImages';
import { Background, Container, Info, Pictures, Poster } from './styles';

export function PersonDetails() {
  const { id } = useParams();

  const [details, setDetails] = useState();
  const [images, setImages] = useState();
  const [tvCredits, setTvCredits] = useState();
  const [movieCredits, setMovieCredits] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getAllData() {
      Promise.all([
        getDetails('person', id),
        getMovieCredits('person', id),
        getTvCredits('person', id),
        getActorImages('person', id),
      ]).then(([details, movieCredits, tvCredits, images]) => {
        setDetails(details);
        setImages(images);
        setTvCredits(tvCredits);
        setMovieCredits(movieCredits);
      });
    }

    getAllData();
  }, [id]);

  return (
    <>
      {details && (
        <>
          <Background $img={getImages(details.profile_path)} />
          <Container>
            <Poster>
              <img
                src={getImages(details.profile_path)}
                alt="poster"
                onError={(e) => (e.target.style.display = 'none')}
              />
            </Poster>

            <Info>
              <h2>{details.name}</h2>
              <p>
                Nascimento:{' '}
                <span>
                  {formatDate(details.birthday)} (idade{' '}
                  {calculateAge(details.birthday, details.deathday)} anos)
                </span>
              </p>
              {details.deathday && (
                <p>
                  Falecimento:
                  <span>{details.deathday}</span>
                </p>
              )}
              <p>{details.biography}</p>
              <Pictures>
                {images &&
                  images
                    .slice(2, 7)
                    .map((image, index) => (
                      <img src={getImages(image.file_path)} key={index} />
                    ))}
              </Pictures>
            </Info>
          </Container>

          {movieCredits && (
            <Slider title="Filmes" info={movieCredits} type={'movie'} />
          )}
          {tvCredits && <Slider title="Séries" info={tvCredits} type={'tv'} />}
        </>
      )}
    </>
  );
}
