import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 32px 160px;
  justify-content: space-between;
  align-items: center;
`

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

export const ButtonCart = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
