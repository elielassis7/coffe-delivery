import { ReactNode, createContext, useReducer } from 'react'
import {
  Coffe,
  coffeReducer,
  AddressOrder,
} from '../reducer/coffeReducer/coffeOrder'
import {
  addNewAddressAction,
  addNewOrderCoffeAction,
  decreaseQuantityAction,
  deleteCoffeAction,
  increaseQuantityAction,
  resetCoffesAction,
} from '../reducer/coffeReducer/actions'

export interface CreateOrderCoffe {
  idCoffe: number
  pathImageCoffe: string
  nameCoffe: string
  quantyCoffe: number
  valueCoffe: number
  totalCoffe: number
}

interface ContextOrderType {
  coffes: Coffe[]
  totalOrder: number
  addressDelivery: AddressOrder
  toggleOrderCoffe: (data: CreateOrderCoffe) => void
  removeCoffe: (data: number) => void
  addNewAddress: (data: AddressOrder) => void
  increaseAmount: (data: number) => void
  decreaseAmount: (data: number) => void
  resetCoffes: () => void
}

export const ContextOrder = createContext({} as ContextOrderType)

type CoffeContextProps = {
  children: ReactNode
}

export function CoffeContextProvider({ children }: CoffeContextProps) {
  const [coffeState, dispatch] = useReducer(coffeReducer, {
    coffes: [],
    addressDelivery: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      typePay: '',
    },
    totalOrder: 0,
  })

  const { coffes, addressDelivery, totalOrder } = coffeState

  function toggleOrderCoffe(data: CreateOrderCoffe) {
    const filter = coffes.some(
      (item: { idCoffe: number }) => item.idCoffe === data.idCoffe,
    )

    if (filter === false) {
      const id = String(new Date().getTime())
      const newOrderCoffe: Coffe = {
        id,
        idCoffe: data.idCoffe,
        pathImage: data.pathImageCoffe,
        name: data.nameCoffe,
        quanty: data.quantyCoffe,
        value: data.valueCoffe,
        total: data.totalCoffe,
      }
      dispatch(addNewOrderCoffeAction(newOrderCoffe))
    } else {
      dispatch(deleteCoffeAction(data.idCoffe))
    }
  }

  function removeCoffe(id: number) {
    dispatch(deleteCoffeAction(id))
  }

  function increaseAmount(id: number) {
    dispatch(increaseQuantityAction(id))
  }

  function decreaseAmount(id: number) {
    dispatch(decreaseQuantityAction(id))
  }

  function addNewAddress(data: AddressOrder) {
    dispatch(addNewAddressAction(data))
  }

  function resetCoffes() {
    dispatch(resetCoffesAction())
  }

  return (
    <ContextOrder.Provider
      value={{
        coffes,
        toggleOrderCoffe,
        removeCoffe,
        totalOrder,
        addNewAddress,
        addressDelivery,
        increaseAmount,
        decreaseAmount,
        resetCoffes,
      }}
    >
      {children}
    </ContextOrder.Provider>
  )
}
