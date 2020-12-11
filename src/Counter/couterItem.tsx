import React, { useContext } from "react";
import Reducer from "./Store/store";
import CreateContext from "./Store";
import { Input, Button } from "antd";
const CouterItem = () => {
  const [store] = useContext(CreateContext);
  console.log(store)
  return (
    <div>
      <Button>-</Button>
      <span>{store.number}</span>
      <Button>+</Button>
    </div>
  );
};
export default CouterItem;
