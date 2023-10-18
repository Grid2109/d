import styled from 'styled-components'

export const Container = styled.div`
  z-index: 99;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  span {
    padding: 8px 12px;
    border: 2px solid #ffffff;
    border-radius: 30px;
    font-size: 0.75em;
    font-weight: 400;
    background-color: #252525;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 400px) {
      font-size: 0.6rem;
    }
  }
`
