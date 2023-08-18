import { ReactNode, useState, createContext } from 'react'

export interface CoffeDataType {
  id?: number
  pathImage: string
  tag: string[]
  name: string
  description: string
}

type CoffeContextData = {
  children: ReactNode
}

interface CreateOrderData {
  cep: string
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

interface ContextOrderType {
  addressLine1: string
  addressLine2: string
  selectPay: string
  CreateOrder: (data: CreateOrderData) => void
  SelectPayment: (data: string) => void
}

export const ContextOrder = createContext({} as ContextOrderType)

export function CoffeContextProvider({ children }: CoffeContextData) {
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [selectPay, setSelectPay] = useState('')
  // const [coffeSelect, setCoffeSelect] = useState('')

  function CreateOrder(data: CreateOrderData) {
    setAddressLine1(`Rua ${data.rua}, ${data.numero}`)
    setAddressLine2(`${data.bairro} - ${data.cidade},${data.uf}`)

    console.log(addressLine1, addressLine2)
  }

  function SelectPayment(data: string) {
    setSelectPay(data)
  }

  return (
    <ContextOrder.Provider
      value={{
        CreateOrder,
        addressLine1,
        addressLine2,
        selectPay,
        SelectPayment,
      }}
    >
      {children}
    </ContextOrder.Provider>
  )
}
