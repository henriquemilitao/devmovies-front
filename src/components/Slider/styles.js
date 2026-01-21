import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0 20px 20px;
  overflow-x: hidden;

  h2 {
    color: #ffffff;
    font-size: 24px;
    margin: 50px 0 20px 20px;
  }

  .swiper-wrapper {
    display: flex;
    cursor: pointer;
  }

  /* Ajustes mobile */
  @media (max-width: 768px) {
    padding: 0 10px 20px;

    h2 {
        font-size: 18px;
        margin: 30px 0 10px 10px;
    }
  }
`;