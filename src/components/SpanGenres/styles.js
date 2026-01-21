import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 20px 0 20px;
  gap: 10px;
  flex-wrap: wrap; /* Isso faz os itens quebrarem linha se faltar espaço */

  span {
    color: #ffffff;
    border: 2px solid #ffffff;
    padding: 8px 18px;
    border-radius: 30px;
    background-color: #0f0f0f;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    width: min-content; /* O container abraça o texto */
    white-space: nowrap; /* Impede que o texto de dentro quebre */
  }

  @media (max-width: 768px) {
    span {
        font-size: 12px;
        padding: 5px 12px;
    }
  }
`;