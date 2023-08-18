import styled from 'styled-components'

export const ButtonLocale = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-light']};
  svg {
    color: ${(props) => props.theme.purple};
  }
  color: ${(props) => props.theme['purple-dark']};
`
