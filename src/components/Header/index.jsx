import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import { Container, Menu, Li } from './styles';

function Header() {
  const { pathname } = useLocation();
  const [changeBackground, setChangeBackground] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      setChangeBackground(true);
    } else {
      setChangeBackground(false);
    }
  };

  return (
    <Container $changeBackground={changeBackground}>
      <img alt="logo-site" src={Logo} />
      <Menu>
        <Li $isActive={pathname === '/'}>
          <Link to="">Home</Link>
        </Li>
        <Li $isActive={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li $isActive={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
