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
    /* border-radius: 15px; */
  }

  p {
    text-align: center;
  }
`;
