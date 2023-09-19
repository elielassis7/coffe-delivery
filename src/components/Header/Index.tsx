import { ShoppingCart } from 'phosphor-react'
import {
  AmountCart,
  ButtonCart,
  CartContainer,
  HeaderContainer,
} from './styles'
import logoCoffe from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Location } from './component/Index'
import { useContext } from 'react'
import { ContextOrder } from '../../context/CoffeContext'

export function Header() {
  const { coffes } = useContext(ContextOrder)
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffe} alt="" />
      </NavLink>

      <nav>
        <Location />
        <CartContainer>
          <NavLink to="/checkout" title="Ver sua compras">
            <ButtonCart>
              <ShoppingCart weight="fill" />
            </ButtonCart>
          </NavLink>
          {coffes.length === 0 ? '' : <AmountCart>{coffes.length}</AmountCart>}
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
