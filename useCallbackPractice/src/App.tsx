import { useCallback, useMemo, useState } from 'react'
import './App.css'

export const App =()=>{
  const [count, setCount] = useState<number>(0)
  const [text, setText] = useState<string>('Hola');
  const [calculate, setCalculate] = useState<number>(0)

  const message = useMemo(()=>{
    return getMessage();
  },[text]);
  function getMessage(){
    console.log('getMessage');
    return `${text}`
  }
  function calculateCount(){
    console.log('Calculate count');
    setCount(count+1)
  }

  const memoCalculateCount = useCallback(()=>{
    calculateCount()
  },[calculate])

  return(
    <>
      <h1>{message + count}</h1>
      <button onClick={()=>{memoCalculateCount()}}>Click</button>
    </>
  )
}
