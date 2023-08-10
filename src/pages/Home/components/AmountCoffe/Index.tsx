import { Minus, Plus } from 'phosphor-react'
import { AmountCoffeContainer } from './styles'
import { useState } from 'react'

export function AmountCoffe() {
  const [count, setCount] = useState(1)

  function handlePlusAmount() {
    setCount(count + 1)
  }

  function handleMinusAmount() {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <AmountCoffeContainer>
      <button onClick={handleMinusAmount}>
        <Minus size={14} />
      </button>
      <span>{count}</span>
      <button onClick={handlePlusAmount}>
        <Plus size={14} />
      </button>
    </AmountCoffeContainer>
  )
}
