import { useEffect, useState } from "react";
import "../App.css";
type Props={
  initial:number;
  duration:number;
  increment:number;
}
export const Counter: React.FC<Props> = ({initial, duration, increment}:Props) => {
  const [initialValue, setInitialValue] = useState<number>(initial);
  const [durationTime, setDurationTime] = useState<number>(duration);
  const [incrementValue, setIncrementValue] = useState<number>(increment);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setInitialValue((prevValue) => prevValue + incrementValue);
    }, durationTime * 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [initialValue]);
  return (
    <>
      <div>Automatic Counter: {initialValue}</div>
    </>
  )
}
