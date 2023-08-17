import { ReactNode, useState } from 'react'

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

export function CoffeContextProvider({ children }: CoffeContextData) {
  const [coffeSelect, setCoffeSelect] = useState([])
  return <div>{children}</div>
}
