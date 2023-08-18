import { ShoppingCart } from 'phosphor-react'
import { ButtonCart, HeaderContainer } from './styles'
import logoCoffe from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Location } from './component/Index'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffe} alt="" />
      </NavLink>

      <nav>
        <Location />

        <NavLink to="/checkout" title="Ver sua compras">
          <ButtonCart>
            {' '}
            <ShoppingCart weight="fill" />
          </ButtonCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
