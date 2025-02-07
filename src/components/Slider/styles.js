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

  .swiper-wrapper:active {
    cursor: grabbing; /* Quando o mouse está clicado e segurado */
  }

  .swiper-wrapper.dragging {
    cursor: grab;
  }
`;
