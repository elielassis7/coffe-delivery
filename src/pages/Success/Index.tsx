import {
  CircleLocal,
  CirclePayment,
  CircleTime,
  ContainerOrderInfo,
  ContainerSuccess,
  DeliveryData,
  HeaderContainerSuccess,
  ImageDelivery,
  InfoRow,
  OrderInfo,
} from './styles'
import ImageSuccess from '../../assets/ImageSuccess.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <ContainerSuccess>
      <HeaderContainerSuccess>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </HeaderContainerSuccess>
      <ContainerOrderInfo>
        <OrderInfo>
          <InfoRow>
            <CircleLocal>
              <MapPin size={16} weight="fill" />
            </CircleLocal>
            <DeliveryData>
              <p>
                Entrega em <strong>Rua Cascavel, 205</strong>
              </p>
              <p>Dom Bosco - Sarandi, PR</p>
            </DeliveryData>
          </InfoRow>
          <InfoRow>
            <CircleTime>
              <Timer size={16} weight="fill" />
            </CircleTime>
            <DeliveryData>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </DeliveryData>
          </InfoRow>
          <InfoRow>
            <CirclePayment>
              <CurrencyDollar size={16} weight="fill" />
            </CirclePayment>
            <DeliveryData>
              <p>Pagamento na Entrega</p>
              <p>
                <strong>Cartão de crédito</strong>
              </p>
            </DeliveryData>
          </InfoRow>
        </OrderInfo>
        <ImageDelivery>
          <img src={ImageSuccess} alt="" />
        </ImageDelivery>
      </ContainerOrderInfo>
    </ContainerSuccess>
  )
}
