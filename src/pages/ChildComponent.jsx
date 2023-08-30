import React, { useContext } from "react";
import MyContext from "./MyContext";

const ChildComponent = () => {
  const contextValue = useContext(MyContext);

  return <div style={{ color: "white" }}>{contextValue}</div>;
};

export default ChildComponent;
