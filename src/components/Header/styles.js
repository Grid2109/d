import styled from 'styled-components'

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;

  img {
    width: 25%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`
export const StyledLi = styled.li`
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
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 0;
    transition: width 0.5s ease-in-out;
  }

  &.active::after {
    width: 100%;
  }
`
