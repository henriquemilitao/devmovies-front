import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Info = styled.div`
  z-index: 2;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 16px;
      margin-top: 15px;
    }
  }
`;

export const Poster = styled.div`
  z-index: 2;

  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.35s linear;
  }

  @media (max-width: 768px) {
    img {
      width: 60vw;
      max-width: 300px;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 10px;
    
    button {
       font-size: 14px;
       padding: 10px 20px;
    }
  }
`;