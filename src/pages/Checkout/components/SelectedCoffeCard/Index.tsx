import { Trash } from 'phosphor-react'
import { AmountCoffe } from '../../../Home/components/AmountCoffe/Index'
import { CardCoffe, ControlQuanty, ButtonRemove, FormRows } from './styles'
import { useContext } from 'react'
import { ContextOrder } from '../../../../context/CoffeContext'

interface InfoCardCoffe {
  id: number
  image: string
  name: string
  quantity: number
  total: number
}

export function SelectedCoffeCard({
  id,
  image,
  name,
  quantity,
  total,
}: InfoCardCoffe) {
  const { removeCoffe, increaseAmount, decreaseAmount } =
    useContext(ContextOrder)
  const totalParse = total.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleMinus() {
    if (quantity > 1) {
      decreaseAmount(id)
    }
  }

  function handlePlus() {
    increaseAmount(id)
  }

  function handleRemove() {
    removeCoffe(id)
  }

  return (
    <CardCoffe>
      <img src={image} alt="" />
      <ControlQuanty>
        <h2>{name}</h2>
        <FormRows>
          <AmountCoffe
            amount={quantity}
            minus={handleMinus}
            plus={handlePlus}
          />
          <ButtonRemove onClick={handleRemove}>
            <Trash size={16} />
            <span>Remover</span>
          </ButtonRemove>
        </FormRows>
      </ControlQuanty>
      <label>{totalParse}</label>
    </CardCoffe>
  )
}
