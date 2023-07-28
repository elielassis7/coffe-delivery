import { AmountCoffe, ButtonCart, Card, PriceContainer, Tags } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { CoffeDataType } from '../../../../context/CoffeContext'

export function CoffeCard({
  pathImage,
  tag,
  name,
  description,
}: CoffeDataType) {
  return (
    <div>
      <Card>
        <main>
          <img src={pathImage} alt="" />
          <Tags>
            {tag.map((i) => (
              <span key={i}>{i}</span>
            ))}
          </Tags>

          <h1>{name}</h1>
          <p>{description}</p>
          <PriceContainer>
            <h2>R$9,90</h2>
            <AmountCoffe>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </AmountCoffe>
            <ButtonCart>
              <ShoppingCart weight="fill" size={14} />
            </ButtonCart>
          </PriceContainer>
        </main>
      </Card>
    </div>
  )
}
