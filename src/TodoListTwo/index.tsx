import React, { useState } from "react";
import { Button, Input } from "antd";
interface SentValue {
  saveValue: (i: string | number) => void;
}
interface List {
  list: (string | number)[];
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
const List = ({ list }: List) => {
  return (
    <div>
      <ul>
        {list.map((i, e) => {
          return <li key={e}>{i}</li>;
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
  return (
    <div>
      <Top saveValue={saveValue} />
      <List list={list} />
    </div>
  );
};
export default TodoListTwo;
