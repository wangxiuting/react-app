import {useReducer} from 'react';
import  * as Constant from './constant';// 这里有相关reducer的数据备注
const reducerSore ={
  list:[]
}
const storeFun = (state:any,action:any)=>{
  switch (action.type) {
    case Constant.SET_TODO_LIST:
      return { ...state , list: action.list };
    default:
      throw new Error();
  }
}
const Reducer =  ()=>{

    const [store,dispatchStore] = useReducer(storeFun,reducerSore)
    return { store, dispatchStore }
}

export default Reducer 