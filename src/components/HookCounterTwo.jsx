import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCounter = 0;
    const[count,setCount] = useState(initialCounter);
    const incrementFive = () =>{
        for(let i = 0;  i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
        Count : {count}<br></br>
        <button onClick={() => setCount(initialCounter) } className="btn btn-primary mr-1">Reset</button>
        <button onClick={()=> setCount(prevCount => prevCount + 1) } className="btn btn-success mr-1" >Increment</button>
        <button onClick={()=> setCount(prevCount => prevCount - 1) } className="btn btn-danger mr-1">Decrement</button>
        <button onClick={incrementFive } className="btn btn-warning">Increment 5</button>

    </div>
  )
}

export default HookCounterTwo