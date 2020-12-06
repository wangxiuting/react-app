import { Button } from "antd";
import CreateContext   from '../../../Store'
import React,{useContext} from "react";
import {SET_TODO_LIST}from '../../../Store/constant'
interface listDatas {
  listData: (string | number)[];
  del: (i: number) => void;
}
const List = ({ listData, del }: listDatas) => {
  const [store,dispatchStore] = useContext(CreateContext)
  dispatchStore({type:SET_TODO_LIST,list:listData})
  return (
    <ul>
      {listData.map((e, i) => {
        return (
          <li key={i.toString()}>
            {e} <Button onClick={() => del(i)}>删除</Button>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
