import React, { useState } from "react";
interface FromFahter {
  settingValue: (i: string | number) => void;
}
interface GetList {
  setList: (number | string)[];
  filterList: (i: number) => void;
}
const Top = ({ settingValue }: FromFahter) => {
  const [value, setValue] = useState("");
  const add = () => {
    settingValue(value);
    setValue("");
    // 将值传给父元素
    // 清空当前值
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={add}>添加</button>
    </div>
  );
};
const Center = ({ setList, filterList }: GetList) => {
  return (
    <div>
      <ul>
        {setList.map((e, i) => {
          return (
            <li key={i}>
              {e} <button onClick={() => filterList(i)}>删除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Father = () => {
  const [list, setList] = useState<(number | string)[]>([]);
  const operateValue = (getValue: number | string) => {
    setList([...list, getValue]);
  };
  const filterList = (currentValue: number) => {
    setList(list.filter((e, i) => currentValue !== i));
  };
  return (
    <div>
      <Top settingValue={operateValue} />
      <Center setList={list} filterList={filterList} />
    </div>
  );
};
export default Father;
