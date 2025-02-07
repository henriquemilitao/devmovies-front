import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    from {
        transform: scale(0);
    } 
    to {
        transform: scale(1);
    }
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
`;

export const Pictures = styled.div`
  display: flex;
  gap: 10px;

  img {
    height: 200px;
  }
`;
