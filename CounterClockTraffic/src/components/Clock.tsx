import { useState, useEffect } from "react";

export const Clock = () => {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(true);
  useEffect(() => {
    if(status){
      const timeoutId = setTimeout(() => {
        setSecond((prevValue) => prevValue + 1);
      }, 300 );
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [second,status]);
  useEffect(() => {
    if (second === 60) {
      setSecond(0);
      setMinute(minute + 1);
    }
  }, [second]);
  useEffect(() => {
    if (minute === 60) {
      setHour(hour + 1);
      setMinute(0);
    }
  }, [minute]);
  useEffect(() => {
    if (hour === 24) {
      setHour(0);
    }
  }, [hour]);
  return (
    <>
      <h1>CLOCK</h1>
      <div>
        {String(hour).padStart(2, "0")}:{String(minute).padStart(2, "0")}:
        {String(second).padStart(2, "0")}
      </div>
      <div id='btns'>
          <button onClick={()=>{setStatus(true)}}>Play</button>
          <button onClick={()=>{setStatus(false)}}>Stop</button>
          <button onClick={()=>{
            setHour(0);
            setMinute(0);
            setSecond(0);
          }}>Reset</button>
      </div>
    </>
  );
};