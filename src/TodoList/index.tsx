import React, { useState } from "react";
import CreateContext from '../../Store'
import Top from "./Top/index";
import List from "./List/index";
import Reducer from '../../store/Reducer';
const TodoList = () => {
  const { store, dispatchStore } = Reducer()
  const [list, setList] = useState<(string | number)[]>([]);
  const onChange = (inputeValue: string | number) => {
    setList([...list, inputeValue]);
  };
  const delCurrent = (i: number) => {
    setList(list.filter((e, a) => a !== i))
  };
  return (
    <CreateContext.Provider value={{ store, dispatchStore }}  >
      <Top inputChange={onChange} />
      <List listData={list} del={delCurrent} />
    </CreateContext.Provider>
  );
};
export default TodoList;
