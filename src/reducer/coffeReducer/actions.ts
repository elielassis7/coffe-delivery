import { AddressOrder, Coffe } from './coffeOrder'

export enum ActionTypesCoffe {
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
  ADD_NEW_ORDER_COFFE = 'ADD_NEW_ORDER_COFFE',
  DELETE_COFFE = 'DELETE_COFFE',
  ADD_NEW_ADDRESS = 'ADD_NEW_ADDRESS',
  RESET_COFFES = 'RESET_COFFES',
}

export function addNewOrderCoffeAction(newOrderCoffe: Coffe) {
  return {
    type: 'ADD_NEW_ORDER_COFFE',
    payload: newOrderCoffe,
  }
}

export function deleteCoffeAction(id: number) {
  return {
    type: 'DELETE_COFFE',
    payload: id,
  }
}

export function resetCoffesAction() {
  return {
    type: 'RESET_COFFES',
  }
}

export function addNewAddressAction(data: AddressOrder) {
  return {
    type: 'ADD_NEW_ADDRESS',
    payload: data,
  }
}

export function increaseQuantityAction(id: number) {
  return {
    type: 'INCREASE_QUANTITY',
    payload: id,
  }
}

export function decreaseQuantityAction(id: number) {
  return {
    type: 'DECREASE_QUANTITY',
    payload: id,
  }
}
