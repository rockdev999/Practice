import { useState, useEffect } from "react";
import '../App.css'
enum Color{
    RED,
    YELLOW,
    GREEN
}

export const TrafficLigth = () => {
    const [color, setColor] = useState<number>(0);
    const [timeRed, setTimeRed] = useState<number>(0);
    const [timeYellow, setTimeYellow] = useState<number>(0);
    const [timeGreen, setTimeGreen] = useState<number>(0);
    const [status, setStatus] = useState<boolean>(false);
    useEffect(() => {
      if(status){
        if(color===Color.RED){
            const timeoutId = setTimeout(() => {
                setColor((prevValue) => prevValue + 1);
            }, timeRed*1000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
        if(color===Color.YELLOW){
            const timeoutId = setTimeout(() => {
                setColor((prevValue) => prevValue + 1);
            }, timeYellow*1000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
        if(color===Color.GREEN){
            const timeoutId = setTimeout(() => {
                setColor((prevValue) => prevValue + 1);
            }, timeGreen*1000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
        if(color>Color.GREEN) setColor(Color.RED);
      }
    }, [color,status]);
    return (
      <>
        <h1>Traffic Ligth</h1>
        <div>
            <form>
                <input className="btns" type="number" placeholder="Time Red" onChange={(event)=>{setTimeRed(parseInt(event.target.value))}}/>
                <input className="btns" type="number" placeholder="Time Yellow" onChange={(event)=>{setTimeYellow(parseInt(event.target.value))}}/>
                <input className="btns" type="number" placeholder="Time Green" onChange={(event)=>{setTimeGreen(parseInt(event.target.value))}}/>
                <button type="reset">Clear</button>
            </form>
            <div id='traffic_ligth'>
            {color === 0 ? <div id="redT"></div> : <div id="redF"></div>}
            {color === 1 ? <div id="yellowT"></div> : <div id="yellowF"></div>}
            {color === 2 ? <div id="greenT"></div> : <div id="greenF"></div>}
            </div>
            <div id='btns'>
            <button onClick={()=>{setStatus(true)}}>Play</button>
            <button onClick={()=>{setStatus(false)}}>Stop</button>
            <button onClick={()=>{
                setColor(1)
            }}>Reset</button>
            </div>
        </div>
      </>
    );
  };
  