import styled from 'styled-components'

export const Card = styled.div`
  grid-area: card;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  border: 0.125rem solid slateblue;
  margin-bottom: 2rem;
  position: relative;
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    top: -3rem;
  }
  img {
    width: 7.5rem;
    height: 7.5rem;
  }

  h1 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin: 0 1rem;
  }
`
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 0.5rem;
    padding: 4px 8px;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 2rem;
  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    color: ${(props) => props.theme['base-title']};
  }
`
export const AmountCoffe = styled.div`
  background: ${(props) => props.theme['base-button']};
  border: none;
  button {
    background: transparent;
    color: ${(props) => props.theme.purple};
    width: 1.5rem;
    border: none;
    height: 100%;
  }
`

export const ButtonCart = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['purple-dark']};
  border: none;
  width: 1.625rem;
  height: 1.625rem;
  border-radius: 6px;
  padding: 5px;
  svg {
    fill: ${(props) => props.theme.white};
  }
`
