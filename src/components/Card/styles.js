import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 30px;
    width: 300px;
    height: 450px;
    object-fit: cover; /* Garante que a imagem não estique */
  }

  h3 {
    color: #ffffff;
    margin-top: 15px;
    text-align: center;
  }

  @media (max-width: 768px) {
    img {
        width: 150px; /* Card menor no celular */
        height: 225px; /* Mantém a proporção */
        border-radius: 15px;
    }

    h3 {
        font-size: 14px; /* Título menor */
        margin-top: 10px;
        max-width: 150px; /* Evita texto vazando */
    }
  }
`;