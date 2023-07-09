import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, StyledLi } from './styles'

function Header() {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <Container>
      <img src={Logo} alt="logo-dev-movies" />
      <Menu>
        <StyledLi className={pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </StyledLi>
        <StyledLi className={pathname.includes('filmes') ? 'active' : ''}>
          <Link to="/filmes">Filmes</Link>
        </StyledLi>
        <StyledLi className={pathname.includes('series') ? 'active' : ''}>
          <Link to="/series">Séries</Link>
        </StyledLi>
      </Menu>
    </Container>
  )
}

export default Header
