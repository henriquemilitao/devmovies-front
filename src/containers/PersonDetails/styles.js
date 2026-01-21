import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
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
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -150px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

export const Poster = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 2;

  img {
    width: 450px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.35s linear;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 0;
    margin-top: -50px;

    img {
      width: 200px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
  padding: 20px;
  z-index: 2;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-weight: 700;
    margin: 20px 0 30px;
    color: #ffffff;

    span {
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;

    h2 {
      font-size: 30px;
      margin-top: 10px;
    }
  }
`;

export const ContainerVideos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  div {
    max-width: 1000px;
    width: 100%;
  }

  h4 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    gap: 40px;

    iframe {
      height: 300px;
    }
  }
`;

export const Pictures = styled.div`
  display: flex;
  gap: 10px;

  img {
    height: 200px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    
    img {
      height: 100px;
    }
  }
`;