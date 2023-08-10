import { NavLink } from 'react-router-dom'
import {
  ButtonCash,
  ButtonCredit,
  ButtonDebit,
  ButtonFinished,
  ButtonRemove,
  CardCoffe,
  Cards,
  CheckoutContainer,
  ControlQuanty,
  DetailsOrder,
  Divider,
  FormCard,
  FormContainer,
  FormRows,
  HeaderForm,
  HeaderFormPay,
  InputLarge,
  InputMedium,
  InputSmall,
  OrderContainer,
  Titles,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Expresso from '../../assets/images/Expresso.svg'
import Latte from '../../assets/images/Latte.svg'
import { AmountCoffe } from '../Home/components/AmountCoffe/Index'

export interface StyledButtonProps {
  clicked: boolean
}

export function Checkout() {
  const { register, handleSubmit } = useForm()
  const [clickedButton, setClickedButton] = useState(0)

  const handleClick = (buttonNumber: number) => {
    setClickedButton(buttonNumber)
  }

  return (
    <CheckoutContainer>
      <Cards>
        <Titles>Complete sue pedido</Titles>

        <form onSubmit={handleSubmit}>
          <FormCard>
            <HeaderForm>
              <div>
                <MapPinLine size={22} />
                <h3>Endereço de Entrega</h3>
              </div>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </HeaderForm>
            <FormContainer>
              <InputMedium placeholder="CEP" {...register('cep')} />
              <FormRows>
                <InputLarge
                  placeholder="Rua"
                  maxLength={8}
                  {...register('rua')}
                />
              </FormRows>
              <FormRows>
                <InputMedium placeholder="Número" {...register('numero')} />
                <InputLarge
                  placeholder="Complemento"
                  {...register('complemento')}
                />
              </FormRows>
              <FormRows>
                <InputMedium placeholder="Bairro" {...register('bairro')} />
                <InputLarge placeholder="Cidade" {...register('cidade')} />
                <InputSmall placeholder="UF" {...register('uf')} />
              </FormRows>
            </FormContainer>
          </FormCard>

          <FormCard>
            <FormContainer>
              <HeaderFormPay>
                <div>
                  <CurrencyDollar size={22} />
                  <h3>Pagamento</h3>
                </div>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </HeaderFormPay>
              <FormRows>
                <ButtonCredit
                  type="button"
                  clicked={clickedButton === 1}
                  onClick={() => handleClick(1)}
                >
                  <CreditCard size={16} />
                  <label htmlFor="credit">cartão de credito</label>
                </ButtonCredit>
                <ButtonDebit
                  type="button"
                  clicked={clickedButton === 2}
                  onClick={() => handleClick(2)}
                >
                  <Bank size={16} />
                  <label htmlFor="debit">cartão de débito</label>
                </ButtonDebit>
                <ButtonCash
                  type="button"
                  clicked={clickedButton === 3}
                  onClick={() => handleClick(3)}
                >
                  <Money size={16} />
                  <label htmlFor="cash">dinheiro/pix</label>
                </ButtonCash>
              </FormRows>
            </FormContainer>
          </FormCard>
        </form>
      </Cards>
      <Cards>
        <Titles>Cafés Selecionados</Titles>
        <OrderContainer>
          <CardCoffe>
            <img src={Expresso} alt="" />
            <ControlQuanty>
              <h2>Expresso</h2>
              <FormRows>
                <AmountCoffe />
                <ButtonRemove>
                  <Trash size={16} />
                  <span>Remover</span>
                </ButtonRemove>
              </FormRows>
            </ControlQuanty>
            <label>R$ 9,90</label>
          </CardCoffe>
          <Divider />
          <CardCoffe>
            <img src={Latte} alt="" />
            <ControlQuanty>
              <h2>Latte</h2>
              <FormRows>
                <AmountCoffe />
                <ButtonRemove>
                  <Trash size={16} />
                  <span>Remover</span>
                </ButtonRemove>
              </FormRows>
            </ControlQuanty>
            <label>R$ 9,90</label>
          </CardCoffe>
          <Divider />
          <DetailsOrder>
            <div>
              <label>Total de itens</label>
              <span>R$ 29,70</span>
            </div>
            <div>
              <label>Entrega</label>
              <span>R$ 3,50</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ 33,20</h3>
            </div>

            <NavLink to="/success" title="Confirmar pedido">
              <ButtonFinished>Confirmar pedido</ButtonFinished>
            </NavLink>
          </DetailsOrder>
        </OrderContainer>
      </Cards>
    </CheckoutContainer>
  )
}
