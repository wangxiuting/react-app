import { Input, Button } from "antd";
import React, { useState } from "react";
interface currentValue {
  inputChange: (data: any) => void;
}
const Top = (props: currentValue) => {
  const [inputValue, setInputValue] = useState("");
  const { inputChange } = props;
  const search = () => {
    inputChange(inputValue);
    setInputValue("");
  };
  return (
    <>
      <Input
        placeholder="input search text"
        style={{ width: 200 }}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button type="primary" onClick={search}>
        Primary Button
      </Button>
    </>
  );
};
export default Top;
