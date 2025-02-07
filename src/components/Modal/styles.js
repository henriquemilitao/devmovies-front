import styled from 'styled-components';

export const BackGround = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Container = styled.div`
  background-color: #000;
  width: 70%;
  /* max-height: 90vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;
  gap: 20px;

  p {
    font-size: 40px;
    font-weight: 600;
    color: #ffffff;
  }

  button {
    align-self: end;
    margin-right: -40px;
    margin-top: -40px;
    padding: 1px 4px;
    /* background: transparent; */
    border: none;
    border-radius: 5px;
    color: #991313;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }

  iframe {
    border: none;
    /* min-height: 600px; */
    /* height: 100%; */
  }
`;
