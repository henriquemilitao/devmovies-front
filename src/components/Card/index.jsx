import { getImages } from '../../utils/getImages';
import { Container } from './styles';

export function Card({ item, ...props }) {
  const imagePath = item.poster_path || item.profile_path || '';

  // Verifica se há uma imagem válida
  if (!imagePath) {
    return null; // Não renderiza o card
  }
  return (
    <Container {...props}>
      <img src={getImages(item.poster_path || item.profile_path || '')} />
      <h3>{item.title || item.name}</h3>
    </Container>
  );
}
