import { useNavigate } from 'react-router-dom';

import { getImages } from '../../utils/getImages';
import { Container, Title } from './styles';

export function Credits({ credits }) {
  const navigate = useNavigate();

  return (
    <>
      <Title>Elenco</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((actor) => {
            const imagePath = actor.profile_path;

            // Verifica se há uma imagem válida
            if (!imagePath) {
              return null; // Pula para o próximo ator
            }

            return (
              <div
                key={actor.id}
                onClick={() => navigate(`/detalhes/person/${actor.id}`)}
                className="actors"
              >
                <img
                  src={getImages(actor.profile_path)}
                  onError={(e) => (e.target.style.display = 'none')}
                ></img>
                <p>{actor.original_name}</p>
              </div>
            );
          })}
        </Container>
      )}
    </>
  );
}
