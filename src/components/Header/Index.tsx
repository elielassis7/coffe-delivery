import { MapPin, ShoppingCart } from 'phosphor-react'
import { ButtonCart, ButtonLocale, HeaderContainer } from './styles'
import logoCoffe from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="" />
      <div>
        <ButtonLocale>
          <MapPin weight="fill" />
          Sarandi - PR
        </ButtonLocale>
        <ButtonCart>
          <ShoppingCart weight="fill" />
        </ButtonCart>
      </div>
    </HeaderContainer>
  )
}
