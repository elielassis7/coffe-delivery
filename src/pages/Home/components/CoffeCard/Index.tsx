import { ButtonCart, Card, PriceContainer, Tags } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { AmountCoffe } from '../AmountCoffe/Index'
import { CardCoffe } from '../../../../context/CoffeData'
import { useState, useContext } from 'react'
import { ContextOrder } from '../../../../context/CoffeContext'

export function CoffeCard({
  id,
  pathImage,
  tag,
  name,
  description,
  value,
}: CardCoffe) {
  const { toggleOrderCoffe } = useContext(ContextOrder)

  const [quantity, setQuantity] = useState(1)
  const valueParse = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
  const data = {
    idCoffe: id,
    pathImageCoffe: pathImage,
    nameCoffe: name,
    quantyCoffe: quantity,
    valueCoffe: value,
    totalCoffe: quantity * value,
    selectCoffe: false,
  }

  function toggleOrder() {
    toggleOrderCoffe(data)
  }

  function handlePlusAmount() {
    setQuantity((quantity) => quantity + 1)

    handleAmount(quantity)
  }

  function handleMinusAmount() {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1)

      handleAmount(quantity)
    }
  }

  function handleAmount(newQuantity: number) {
    if (data.selectCoffe === true) {
      data.quantyCoffe = newQuantity
    }
  }

  return (
    <div>
      <Card>
        <main>
          <img src={pathImage} alt="" />
          <Tags>
            {tag.map((i: string) => (
              <span key={i}>{i}</span>
            ))}
          </Tags>

          <h1>{name}</h1>
          <p>{description}</p>
          <PriceContainer>
            <h2>{valueParse}</h2>
            <AmountCoffe
              amount={quantity}
              minus={handleMinusAmount}
              plus={handlePlusAmount}
            />
            <ButtonCart onClick={toggleOrder}>
              <ShoppingCart weight="fill" size={14} />
            </ButtonCart>
          </PriceContainer>
        </main>
      </Card>
    </div>
  )
}
