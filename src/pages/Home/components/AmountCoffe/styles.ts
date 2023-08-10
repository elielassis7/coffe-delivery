import { styled } from 'styled-components'

export const AmountCoffeContainer = styled.div`
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
