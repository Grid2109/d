import styled, { keyframes } from 'styled-components'

const scale = keyframes`
   from {
    transform: scale(0)
   }
   to {
    transform: scale(1)
   }
`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-position: center; //posição da imagem de fundo
  background-size: cover; //tamanho da imagem cover: ocupar o espaço disponível
  background-repeat: no-repeat; //não repetir a imagem de fundo caso seja pequena no espaço
  position: relative;
  //máscara na imagem de fundo
  &::before {
    content: '';
    position: absolute;
    top: 0; //pra cima
    left: 0; // à esquerda
    width: 100%; // a máscara deve ocupar todo o espaço da imagem (largura)
    height: 100%; //altura
    background-color: rgba (0, 0, 0, 0.5); //informação da cor junto com a opacidade
  }

  &::after {
    position: absolute;
    top: 0;
    bottom: 0; //efeito esfumaçado na parte debaixo relativo a minha div background
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba (0, 0, 0, 0));
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px; //container dá uma invadida no background
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;
  img {
    width: 450px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px; //efeito esfumaçado
    animation: ${scale} 0.5s linear;
  }
`
export const Info = styled.div`
  padding: 20px;
  width: 50%; //ocupar metade da tela
  z-index: 99; //informações a frente do background
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-weight: 700;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`
export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }

  h4 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
  }
`