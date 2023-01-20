import React, { useState } from 'react'

function HookCounter() {

    const[count , setCount] = useState(0)

  return (
    <div>
        <button onClick={()=> setCount(count + 1)} className="btn btn-primary">Count {count}</button>
    </div>
  )
}

export default HookCounter