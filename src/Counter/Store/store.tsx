/*
 * @Author: your name
 * @Date: 2020-12-11 14:23:52
 * @LastEditTime: 2020-12-11 15:22:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\Counter\Store\store.js
 */
import { useReducer } from "react";
const initValues = {
  id: 0,
  number: 10,
};
const actionTypes = (state: any, action: any) => {
  switch (action.type) {
    case action.ADD_COUNTER:
      state.number += 10;
      break;
    case action.REDUCE_COUNTER:
      state.number = state.number - 10;
      break;
    default:
      return state.number;
  }
};
//  将store与reducer关联
const reducer = () => {
  const [store , actionMethod] = useReducer(actionTypes, initValues);
  // const { store, dispatchStore } = store;
  return { store , actionMethod}
};
export default reducer;
