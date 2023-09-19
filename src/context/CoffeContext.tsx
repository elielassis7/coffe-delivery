import { ReactNode, createContext, useReducer } from 'react'
import { Coffe } from '../reducer/coffeReducer/coffeOrder'
import { ActionTypesCoffe } from '../reducer/coffeReducer/actions'
import { produce } from 'immer'

interface AddressOrder {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  typePay: string
}

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

interface CoffesState {
  coffes: Coffe[]
  addressDelivery: AddressOrder
  totalOrder: number
}

export const ContextOrder = createContext({} as ContextOrderType)

type CoffeContextProps = {
  children: ReactNode
}

export function CoffeContextProvider({ children }: CoffeContextProps) {
  const [coffeState, dispatch] = useReducer(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: CoffesState, action: any) => {
      switch (action.type) {
        case ActionTypesCoffe.ADD_NEW_ORDER_COFFE:
          return produce(state, (draft) => {
            draft.coffes.push(action.payload)
            draft.totalOrder = draft.coffes.reduce(
              (sum, item) => sum + item.total,
              0,
            )
          })
        case ActionTypesCoffe.DELETE_COFFE:
          return produce(state, (draft) => {
            const newArray = draft.coffes.filter(
              (item) => item.idCoffe !== action.payload,
            )
            draft.coffes.splice(0, draft.coffes.length, ...newArray)
            draft.totalOrder = draft.coffes.reduce(
              (sum, item) => sum + item.total,
              0,
            )
          })
        case ActionTypesCoffe.ADD_NEW_ADDRESS:
          return produce(state, (draft) => {
            draft.addressDelivery = action.payload
          })
        case ActionTypesCoffe.INCREASE_QUANTITY:
          return produce(state, (draft) => {
            const item = draft.coffes.find(
              (item) => item.idCoffe === action.payload,
            )
            if (item) {
              item.quanty += 1
              item.total = item.quanty * item.value
              draft.totalOrder = draft.coffes.reduce(
                (sum, item) => sum + item.total,
                0,
              )
            }
          })
        case ActionTypesCoffe.DECREASE_QUANTITY:
          return produce(state, (draft) => {
            const item = draft.coffes.find(
              (item) => item.idCoffe === action.payload,
            )
            if (item && item.quanty > 1) {
              item.quanty -= 1
              item.total = item.quanty * item.value
              draft.totalOrder = draft.coffes.reduce(
                (sum, item) => sum + item.total,
                0,
              )
            }
          })
        case ActionTypesCoffe.RESET_COFFES:
          return produce(state, (draft) => {
            draft.coffes = []
          })
        default:
          return state
      }
    },
    {
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
    },
  )

  const { coffes, addressDelivery, totalOrder } = coffeState

  function toggleOrderCoffe(data: CreateOrderCoffe) {
    // console.log('createNewOrderCoffe called with data:', data)

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
      dispatch({
        type: 'ADD_NEW_ORDER_COFFE',
        payload: newOrderCoffe,
      })
    } else {
      dispatch({
        type: 'DELETE_COFFE',
        payload: data.idCoffe,
      })
    }
  }

  function removeCoffe(id: number) {
    dispatch({
      type: 'DELETE_COFFE',
      payload: id,
    })
  }

  function increaseAmount(id: number) {
    console.log('entrou na função do context')
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: id,
    })
  }

  function decreaseAmount(id: number) {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: id,
    })
  }

  function addNewAddress(data: AddressOrder) {
    dispatch({
      type: 'ADD_NEW_ADDRESS',
      payload: data,
    })
  }

  function resetCoffes() {
    dispatch({
      type: 'RESET_COFFES',
    })
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
