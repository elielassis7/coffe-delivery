import { MapPin, ShoppingCart } from 'phosphor-react'
import { ButtonCart, ButtonLocale, HeaderContainer } from './styles'
import logoCoffe from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffe} alt="" />
      </NavLink>

      <nav>
        <ButtonLocale>
          <MapPin weight="fill" />
          Sarandi - PR
        </ButtonLocale>
        <ButtonCart>
          <NavLink to="/checkout" title="Ver sua compras">
            <ShoppingCart weight="fill" />
          </NavLink>
        </ButtonCart>
      </nav>
    </HeaderContainer>
  )
}
