import { useMemo, useState } from 'react'
import './App.css'

export const App =()=>{
  const [count, setCount] = useState<number>(0)
  const [text, setText] = useState<string>('');
  const message = useMemo(()=>{
    return getMessage();
  },[text]);
  function getMessage(){
    console.log('getMessage');
    return `${text}`
  }
  return(
    <>
      <input type="text" onChange={(event)=>{setText(event.target.value)}} />
      <h1>{message}</h1>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
    </>
  )
}
