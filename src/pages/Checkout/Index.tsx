import { NavLink } from 'react-router-dom'

export function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <button>
        <NavLink to="/success" title="Confirmar pedido">
          Confirmar pedido
        </NavLink>
      </button>
    </div>
  )
}
