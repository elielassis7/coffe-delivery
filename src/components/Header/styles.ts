import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 5rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  background: ${(props) => props.theme['base-background']};
  nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  a {
    text-decoration: none;
  }
`

export const CartContainer = styled.div`
  position: relative;
  display: inline-block;
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
  cursor: pointer;
  hover: {
    background: ${(props) => props.theme.yellow};
  }
`

export const AmountCart = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0.5rem;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  font-size: 0.8rem;
  top: -5px;
  right: -5px;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
`
