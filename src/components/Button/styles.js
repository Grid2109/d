import styled, { css } from 'styled-components'

const buttonStyles = css`
  border: 2px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 20px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.5s;

  &:hover {
    color: #ff0000;
    background: #ffffff;
  }
`
export const ButtonWhite = styled.button`
  ${buttonStyles}
`
export const ButtonRed = styled.button`
  ${buttonStyles}
  background: #ff0000;
  border: 2px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    background: #ff0000;
    color: #f7f7f7;
  }
`
