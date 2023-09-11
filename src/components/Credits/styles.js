import styled from 'styled-components'

export const Title = styled.h4`
  color: #ffffffff;
  font-size: 28px;
  font-weight: 700;
`

export const Container = styled.div`
  display: flex; //uma imagem ao lado da outra
  margin-top: 30px;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #ffffffff;
  }

  img {
    height: 200px; //altura das imagens
  }
`
