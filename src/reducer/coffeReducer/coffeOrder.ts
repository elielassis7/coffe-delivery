import { produce } from 'immer'
import { ActionTypesCoffe } from './actions'

export interface Coffe {
  id: string
  idCoffe: number
  pathImage: string
  name: string
  quanty: number
  value: number
  total: number
}

export interface AddressOrder {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  typePay: string
}

export interface CoffesState {
  coffes: Coffe[]
  addressDelivery: AddressOrder
  totalOrder: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function coffeReducer(state: CoffesState, action: any) {
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
}
