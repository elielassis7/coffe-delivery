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
  InputSelect,
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
import { useContext, useState } from 'react'
import Expresso from '../../assets/images/Expresso.svg'
import Latte from '../../assets/images/Latte.svg'
import { AmountCoffe } from '../Home/components/AmountCoffe/Index'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContextOrder } from '../../context/CoffeContext'

export interface StyledButtonProps {
  clicked: boolean
}

const newOrderFormValidationSchema = z.object({
  cep: z.string().min(8).max(8),
  rua: z.string(),
  numero: z.number(),
  complemento: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string(),
})

type newOrderFormData = z.infer<typeof newOrderFormValidationSchema>

const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
]

export function Checkout() {
  const { CreateOrder, SelectPayment } = useContext(ContextOrder)
  const newOrderForm = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const { register, handleSubmit } = newOrderForm
  const [clickedButton, setClickedButton] = useState('')

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName)
    SelectPayment(buttonName)
  }

  function handleCreateNewOrder(data: newOrderFormData) {
    CreateOrder(data)
  }

  return (
    <CheckoutContainer>
      <Cards>
        <Titles>Complete sue pedido</Titles>

        <form onSubmit={handleSubmit(handleCreateNewOrder)}>
          <FormCard>
            <HeaderForm>
              <div>
                <MapPinLine size={22} />
                <h3>Endereço de Entrega</h3>
              </div>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </HeaderForm>
            <FormContainer>
              <InputMedium
                placeholder="CEP"
                maxLength={8}
                {...register('cep')}
              />
              <FormRows>
                <InputLarge placeholder="Rua" id="rua" {...register('rua')} />
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
                {/* <InputSmall placeholder="UF" {...register('uf')} /> */}
                <InputSelect {...register('uf')}>
                  {states.map((item) => (
                    <option key={item} value="{item}">
                      {item}
                    </option>
                  ))}
                  <option value="value1">PR</option>
                  <option value="value2">SC</option>
                  <option value="value3">RS</option>
                </InputSelect>
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
                  clicked={clickedButton === 'cartão de credito'}
                  onClick={() => handleClick('cartão de credito')}
                >
                  <CreditCard size={16} />
                  <label htmlFor="credit">cartão de credito</label>
                </ButtonCredit>
                <ButtonDebit
                  type="button"
                  clicked={clickedButton === 'cartão de débito'}
                  onClick={() => handleClick('cartão de débito')}
                >
                  <Bank size={16} />
                  <label htmlFor="debit">cartão de débito</label>
                </ButtonDebit>
                <ButtonCash
                  type="button"
                  clicked={clickedButton === 'dinheiro/pix'}
                  onClick={() => handleClick('dinheiro/pix')}
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
