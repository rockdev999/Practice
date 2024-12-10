// para manejar los values del DOM de manera optima
// import { useRef } from 'react'
// import './App.css'

// function App() {

//   const inputRef = useRef(null);
//   const resultRef = useRef(null);
//   const makeThings = () =>{
//     alert(inputRef.current.value)
//     resultRef.current.innerHTML = inputRef.current.value
//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef}/>
//       <button onClick={makeThings}>Cosas</button>
//       <div ref={resultRef}></div>
//     </div>
//   )
// }

// export default App


// Vamos a contar el numero de renderizados, es decir vamos a guardar el valor aunque se recargue la pagina
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  // const [count, setCount] = useState(0);
  const count = useRef(0);
  const inputRef = useRef(null);
  useEffect(()=>{
    // setCount(count+1)
    count.current = count.current + 1;
  },[])

  const handleClick = () =>{
      // inputRef.current.value = 'Probando'
      // inputRef.current.focus()
  }
  return (
    <div>
        <h1>Use of useRef</h1>
        <p>Renders: {count.current}</p>
        <p>Message: {message}</p>
        <input 
          type="text" 
          onChange={(e)=>{
            setMessage(e.target.value)
          }}
          ref={inputRef}
        />
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App