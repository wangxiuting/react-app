import React from "react";
import CreateContext from "./Store";
import CouterItem from "./couterItem";
// import Reducer from "./Store/store";
import Reducer from "./Store/store";
const Salary = () => {
  const { store } = Reducer();
  return (
    <CreateContext.Provider value={{ store }}>
      <CouterItem />
      {/* <CouterItem /> */}
      <p>总计{store.state.number}</p>
    </CreateContext.Provider>
  );
};
export default Salary;
