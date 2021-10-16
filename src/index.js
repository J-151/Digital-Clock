import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Style from "./styles.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [timeEven, settimeEven] = useState(0);
  function toggle() {
    settimeEven(!timeEven);
  }
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
    var interval = null;
    if (time % 2 !== 0) {
      settimeEven(1);
      interval = setInterval(
        () => settimeEven((seconds) => (seconds === 1 ? 0 : 1)),
        1000
      );
    }
    toggle();
  }, []);

  return (
    <div
      style={{
        background: timeEven ? "black" : "white",
        color: timeEven ? "white" : "black"
      }}
      className="App"
    >
      <h2>
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </h2>
    </div>
  );
};

render(<Clock />, document.getElementById("root"));
