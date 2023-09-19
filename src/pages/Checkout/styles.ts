import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding: 5rem;
  margin-top: 108px;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  align-items: flex-start;
  background: ${(props) => props.theme['base-card']};
`

export const Titles = styled.h2`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3;
  font-style: normal;
`

export const FormCard = styled(Container)`
  border-radius: 6px;
  width: 40rem;
  margin-bottom: 0.75rem;
`

export const HeaderForm = styled.div`
  margin-bottom: 2rem;
  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
    margin-left: 1.875rem;
  }
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 35rem;
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

const InputBase = styled.input`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  gap: 4px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
`

export const InputSelect = styled.select`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  gap: 4px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  width: 3.85rem;
`

export const InputMedium = styled(InputBase)`
  width: 12.5rem;
`

export const InputLarge = styled(InputBase)`
  width: 100%;
`

export const HeaderFormPay = styled(HeaderForm)`
  margin-bottom: 0;
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ButtonPayment = styled.label`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  gap: 0.75rem;
  flex: 1 0 0;
  border-radius: 6px;
  svg {
    color: ${(props) => props.theme.purple};
  }

  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};
`

export const OrderContainer = styled(Container)`
  width: 28rem;
  border-radius: 6px 44px;
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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: none;
  background: ${(props) => props.theme['base-button']};
  margin-bottom: 1.5rem;
`

export const DetailsOrder = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  label {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
  }
  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
  }
`

export const ButtonFinished = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 12px 8px;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  hover {
    background: ${(props) => props.theme['yellow-light']};
  }
`
