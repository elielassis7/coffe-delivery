import { useNavigate } from 'react-router-dom'
import {
  ButtonFinished,
  ButtonPayment,
  Cards,
  CheckoutContainer,
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
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContextOrder } from '../../context/CoffeContext'
import { SelectedCoffeCard } from './components/SelectedCoffeCard/Index'

export interface StyledButtonProps {
  clicked: boolean
}

const newOrderFormValidationSchema = z.object({
  cep: z.string().min(8).max(8),
  rua: z.string().nonempty().min(3),
  numero: z.string().min(1),
  complemento: z.string().min(1),
  bairro: z.string().nonempty(),
  cidade: z
    .string()
    .min(3)
    .transform((value) => value.split('/')[0])
    .transform((value) => value.split('-')[0])
    .transform((value) => value.split(' ')[0]),
  uf: z.string(),
  typePay: z.string().nonempty().min(2),
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
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [])

  const { coffes, totalOrder, addNewAddress, resetCoffes } =
    useContext(ContextOrder)
  const pages = useNavigate()

  useEffect(() => {
    if (coffes.length === 0) {
      pages('/')
    }
  }, [coffes, pages])

  const newOrderForm = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const { register, handleSubmit } = newOrderForm

  const totalParse = totalOrder.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  const totalWithDelivery = (totalOrder + 3.5).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleCreateNewOrder(dataForm: newOrderFormData) {
    addNewAddress(dataForm)
    resetCoffes()
    pages('/success')
  }

  return (
    <CheckoutContainer>
      <Cards>
        <form>
          <Titles>Complete sue pedido</Titles>

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
                <InputSelect {...register('uf')}>
                  <option value="">--</option>
                  {states.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
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
                <input
                  type="radio"
                  {...register('typePay')}
                  id="Credit"
                  value={'Cartão de Crédito'}
                />
                <ButtonPayment htmlFor="Credit">
                  <CreditCard size={16} />
                  Cartão de Credito
                </ButtonPayment>

                <input
                  type="radio"
                  {...register('typePay')}
                  id="Debit"
                  value={'Cartão de Débito'}
                />
                <ButtonPayment htmlFor="Debit">
                  <Bank size={16} />
                  Cartão de Debito
                </ButtonPayment>

                <input
                  type="radio"
                  {...register('typePay')}
                  id="Cash"
                  value={'Dinheiro/Pix'}
                />
                <ButtonPayment htmlFor="Cash">
                  <Money size={16} />
                  Dinheiro/Pix
                </ButtonPayment>
              </FormRows>
            </FormContainer>
          </FormCard>
        </form>
      </Cards>
      <Cards>
        <Titles>Cafés Selecionados</Titles>
        <OrderContainer>
          {coffes.map((item) => (
            <div key={item.id}>
              <SelectedCoffeCard
                id={item.idCoffe}
                image={item.pathImage}
                name={item.name}
                quantity={item.quanty}
                total={item.total}
              />
              <Divider />
            </div>
          ))}

          <DetailsOrder>
            <div>
              <label>Total de itens</label>

              <span>{totalParse}</span>
            </div>
            <div>
              <label>Entrega</label>
              <span>R$ 3,50</span>
            </div>
            <div>
              <h3>Total</h3>
              <h3>{totalWithDelivery}</h3>
            </div>

            <ButtonFinished
              onClick={handleSubmit(handleCreateNewOrder)}
              title="Confirmar pedido"
            >
              Confirmar pedido
            </ButtonFinished>
          </DetailsOrder>
        </OrderContainer>
      </Cards>
    </CheckoutContainer>
  )
}
