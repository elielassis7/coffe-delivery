import { Minus, Plus } from 'phosphor-react'
import { AmountCoffeContainer } from './styles'

interface AmountCoffeProps {
  amount: number
  minus: () => void
  plus: () => void
}

export function AmountCoffe(props: AmountCoffeProps) {
  return (
    <AmountCoffeContainer>
      <button onClick={props.minus}>
        <Minus size={14} />
      </button>
      <span>{props.amount}</span>
      <button onClick={props.plus}>
        <Plus size={14} />
      </button>
    </AmountCoffeContainer>
  )
}
