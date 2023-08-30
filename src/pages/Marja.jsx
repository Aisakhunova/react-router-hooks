import React, { useEffect, useState } from "react";
import classes from "./pages.module.css";

export default function Marja() {
  const [buy, setBuy] = useState(0);
  const [sell, setSell] = useState(0);

  const [marja, setMarja] = useState(0);

  useEffect(() => {
    setMarja((sell - buy) / sell);
  }, [buy, sell]);

  return (
    <div className={classes.Marja}>
      <div>
        <h3 style={{ marginTop: "30px" }}> Bought Price: </h3>
        <input
          className={classes.MyInput}
          type="number"
          placeholder="Input"
          onChange={(e) => setBuy(e.target.value)}
        ></input>
      </div>

      <div>
        <h3 style={{ marginTop: "30px" }}>Sell price: </h3>
        <input
          className={classes.MyInput}
          type="number"
          placeholder="input"
          onChange={(e) => setSell(e.target.value)}
        ></input>
      </div>

      <h3 className={classes.Result}>Marja is: {marja}</h3>
    </div>
  );
}
