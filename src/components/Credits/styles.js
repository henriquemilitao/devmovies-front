import styled from 'styled-components';

export const Title = styled.h4`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  margin-top: 30px;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  /* Aqui está a mágica: 
     No computador mantém linha única.
     No celular (max-width: 768px), ele permite quebrar linha (wrap)
     e centraliza os itens.
  */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  .actors {
    cursor: pointer;
  }

  div {
    display: flex;
    max-width: 135px;
    flex-direction: column;
  }

  img {
    height: 200px;
    margin-bottom: 15px;
    border-radius: 5px; /* Adicionei uma borda suave pra ficar bonito */
  }

  p {
    text-align: center;
    color: #fff; /* Garantindo que o nome apareça branco */
  }

  /* Ajuste específico para as imagens no celular ficarem menores */
  @media (max-width: 768px) {
    div {
        max-width: 100px; /* Reduz a largura do container do ator */
    }
    
    img {
        height: 150px; /* Reduz a altura da foto */
        margin-bottom: 10px;
    }

    p {
        font-size: 12px; /* Reduz um pouco a fonte do nome */
    }
  }
`;