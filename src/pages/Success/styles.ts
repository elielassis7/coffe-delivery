import { styled } from 'styled-components'

export const ContainerSuccess = styled.div`
  margin-top: 108px;
  background: ${(props) => props.theme['base-background']};
`

export const HeaderContainerSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2.5rem 5rem;
  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
  }
`

export const ContainerOrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6rem;
  margin: 0 7rem;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  width: 32rem;
  align-items: flex-start;
  border-radius: 6px 36px;
  border: 0.8px solid ${(props) => props.theme.purple};
`

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  svg {
    color: ${(props) => props.theme['base-background']};
  }
`

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 1000px;
  width: 2rem;
  height: 2rem;
`
export const DeliveryData = styled.div`
  display: flex;
  flex-direction: column;
`

export const CircleLocal = styled(Circle)`
  background: ${(props) => props.theme.purple};
`

export const CircleTime = styled(Circle)`
  background: ${(props) => props.theme.yellow};
`

export const CirclePayment = styled(Circle)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const ImageDelivery = styled.div`
  width: 30rem;
  height: 18.31rem;
  flex-shrink: 0;
`
