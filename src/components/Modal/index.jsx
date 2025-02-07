import { useEffect, useState } from 'react';

import { getVideos } from '../../services/getData';
import { Container, BackGround } from './styles';

export function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function findTrailer() {
      const trailer = await getVideos('movie', movieId);
      setMovie(trailer[0]);
    }

    findTrailer();
  }, []);

  return (
    <BackGround onClick={() => setShowModal(false)}>
      {movie ? (
        <Container onClick={() => setShowModal(false)}>
          <button>X</button>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      ) : (
        <Container>
          <button>X</button>
          <p>Video Indisponível no Momento! 💔</p>{' '}
        </Container>
      )}
    </BackGround>
  );
}
