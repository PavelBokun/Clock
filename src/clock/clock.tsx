import React, { useEffect } from "react";
import { useState } from "react";
import { DigitalClock } from "./DigitalClock";
import { AnaloglClock } from "./AnalogClock";

export type PropsType = {
  mode: "digital" | "analog";
};

export const Clock = (props: PropsType) => {
  const [date, setTime] = useState(new Date());

  useEffect(() => {
    const idset = setInterval(() => {
      console.log("tick");
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(idset);
    };
  }, []);

  
  let wiev;
  switch (props.mode) {
    case "analog":
      wiev = <AnaloglClock date={date} />;
      break
    case "digital":
        wiev=<DigitalClock date={date} />
        break
    default:
        wiev=<DigitalClock date={date} />
  }

  return (
    <div>
      <span>{wiev}</span>
      <AnaloglClock date={date} />
    </div>
  );
};
  export type PropsWiev= {
    date: Date
 }




