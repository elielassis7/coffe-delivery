// import { produce } from 'immer'
// import { ActionTypesCoffe } from './actions'

export interface Coffe {
  id: string
  idCoffe: number
  pathImage: string
  name: string
  quanty: number
  value: number
  total: number
}

// interface CoffeDataState {
//   coffes: Coffe[]
// }

// export function coffeReducer(state: CoffeDataState, action: any) {
//     switch (action.type) {
//       case ActionTypesCoffe.ADD_NEW_ORDER_COFFE:
//         return produce(state, (draft) => {
//           draft.push(action.payload)
//           // console.log(state)
//         })
//       case ActionTypesCoffe.DELETE_COFFE:
//         return produce(state, (draft) => {
//           const newArray = draft.filter(
//             (item) => item.idCoffe !== action.payload,
//           )
//           draft.splice(0, draft.length, ...newArray)
//           // console.log(state)
//         })
//     }

//     return state
//   }, [])
