import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Credits } from '../../components/Credits';
import { Slider } from '../../components/Slider';
import { SpanGenres } from '../../components/SpanGenres';
import {
  getDetails,
  getCredits,
  getVideos,
  getSimilar,
} from '../../services/getData';
import { formatDate } from '../../utils/formatDate';
import { getImages } from '../../utils/getImages';
import { Background, Container, ContainerVideos, Info, Poster } from './styles';

export function Details() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  if (type === 'person') {
    navigate(`/detalhes/${type}/${id}`);
  }

  const [details, setDetails] = useState();
  const [credits, setCredits] = useState();
  const [videos, setVideos] = useState();
  const [similar, setSimilar] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getAllData() {
      Promise.all([
        getDetails(type, id),
        getCredits(type, id),
        getVideos(type, id),
        getSimilar(type, id),
      ]).then(([details, credits, videos, similar]) => {
        console.log({ details });
        setDetails(details);
        setCredits(credits);
        setVideos(videos);
        setSimilar(similar);
      });
    }

    getAllData();
  }, [type, id]);

  return (
    <>
      {details && (
        <>
          <Background
            $img={getImages(details.backdrop_path || details.profile_path)}
          />
          <Container>
            <Poster>
              <img
                src={getImages(details.poster_path || details.profile_path)}
                alt="poster"
                onError={(e) => (e.target.style.display = 'none')}
              />
            </Poster>

            <Info>
              <h2>{details.title || details.name}</h2>
              {details.release_date ? (
                <p>{formatDate(details.release_date)}</p>
              ) : details.first_air_date ? (
                <p>{formatDate(details.first_air_date)}</p>
              ) : null}
              <SpanGenres genres={details.genres}></SpanGenres>
              <p>{details.overview || details.biography}</p>
              <Credits credits={credits}></Credits>
            </Info>
          </Container>
          <ContainerVideos>
            {videos &&
              videos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerVideos>

          {similar && <Slider title="Similares" info={similar} type={type} />}
        </>
      )}
    </>
  );
}
