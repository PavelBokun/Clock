import { PropsWiev } from "./clock";

export const DigitalClock:React.FC<PropsWiev> = ({date}) => {
    const time = (num: number) => (num < 10 ? "0" + num : num);
  
    return(
    <div>
      <span>{time(date.getHours())}</span>:
      <span>{time(date.getMinutes())}</span>:
      <span>{time(date.getSeconds())}</span>
    </div>
    )
  };