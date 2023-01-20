import React, { useState } from 'react'

function HookCounterThree() {
     const[name, setName] = useState({firstName:'',lastName:''});    // useState with object

  return (
    <form>
        <input  type = 'text' placeholder='Enter your first name...'
                value={name.firstName} 
                onChange={e=>setName({...name, firstName:e.target.value})} className="mr-2"/>
        <input  type= 'text' placeholder='Enter your last name...'
                value={name.lastName} 
                onChange={e=>setName({...name,lastName:e.target.value})}/>
        <h3>Your Name is {name.firstName} {name.lastName}</h3>
    </form>
  )
}

export default HookCounterThree