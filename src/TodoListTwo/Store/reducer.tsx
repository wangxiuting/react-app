import { useReducer } from 'react'
import { SET_LIST, DEL_LIST } from './constant'
const initState = {
  list: []
}
const storeMethod = (state: any, action: any) => {
  switch (action.type) {
    case SET_LIST:
      state.list.push(1)
      break;
    case DEL_LIST:
      state.list.push(2)
      break;
    default:
      return state;
  }
}
const Reducer = () => {
  const [store, dispatchStore] = useReducer(storeMethod, initState)
  return {
    store,
    dispatchStore
  }
}
export default Reducer