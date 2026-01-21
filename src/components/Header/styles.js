import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 90px;
  z-index: 99; /* Aumentei o z-index pra garantir que fique acima de tudo */
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: ${(props) =>
    props.$changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.5s ease-in-out;

  img {
    width: 25%;
  }

  /* Ajustes para Mobile */
  @media (max-width: 768px) {
    padding: 10px 20px;
    min-height: 70px;

    img {
      width: 30%; /* Logo um pouco maior proporcionalmente no mobile */
      max-width: 150px;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px; /* Diminui o espaço entre os itens */
  }
`;

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 18px; /* Fonte menor no celular */
    
    &::after {
        bottom: -5px;
    }
  }
`;