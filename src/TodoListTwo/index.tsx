import React, { createContext, useContext, useState } from "react";
import { Button, Input } from "antd";
import Reducer from "./Store/reducer";
const CreateContext = createContext<any>({})
const { store, dispatchStore } = Reducer()
interface SentValue {
  saveValue: (i: string | number) => void;
}
interface List {
  list: (string | number)[];
  deleteRow: (i: number) => void;
}
// 接口首字母大写
const Top = ({ saveValue }: SentValue) => {
  const [value, setValue] = useState("");
  const buttonClick = () => {
    saveValue(value);
    setValue("");
  };
  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={buttonClick}>按钮</Button>
    </div>
  );
};
const List = ({ list, deleteRow }: List) => {
  return (
    <div>
      <ul>
        {list.map((i, e) => {
          return (
            <li key={e}>
              {i}
              <Button onClick={() => deleteRow(e)}>删除</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const TodoListTwo = () => {
  const [list, setList] = useState<(string | number)[]>([]);
  const saveValue = (i: number | string) => {
    setList([...list, i]);
  };
  const delValue = (i: number) => {
    setList(list.filter((e, index) => index !== i));
  };
  return (
    <CreateContext.Provider value={{ store, dispatchStore }}>
      <Top saveValue={saveValue} />
      <List list={list} deleteRow={delValue} />
    </CreateContext.Provider>
  );
};
export default TodoListTwo;
