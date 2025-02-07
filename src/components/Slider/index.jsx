import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '../Card';
import { Container } from './styles';

export function Slider({ info, title, type }) {
  const navigate = useNavigate();

  const swiperRef = useRef(null); // Referência para o Swiper
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0); // Vai para o primeiro slide sem animação
    }
  }, [info]);
  return (
    <Container>
      <h2>{title}</h2>;
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        // grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              item={item}
              onClick={() => {
                navigate(`/detalhes/${type}/${item.id}}`);
                // setTeste(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
