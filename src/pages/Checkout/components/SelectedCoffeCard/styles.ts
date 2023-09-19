import styled from 'styled-components'

export const CardCoffe = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 8px 4px;
  margin-bottom: 1.5rem;
  img {
    width: 64px;
    height: 64px;
  }
  label {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
export const ControlQuanty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h2 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FormRows = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  input[type='radio'] {
    display: none;
  }
  input[type='radio']:checked + label {
    border: 1px solid ${(props) => props.theme.purple};
  }
  :hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const ButtonRemove = styled.button`
  height: 2rem;
  background: ${(props) => props.theme['base-button']};
  border: none;
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 0.25rem;
  border-radius: 6px;
  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }
`
