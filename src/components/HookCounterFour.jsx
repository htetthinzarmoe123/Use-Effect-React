import React, { useState } from 'react'

function HookCounterFour() {
    const[items,setItems] = useState([]);
    const addItem = () =>{
        // ...items က မူလ array ကို overwrite မဖြစ်အောင်လုပ်ခြင်း
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random() * 10 ) + 1
        }])
    }
  return (
    <div>
        <button className='btn btn-primary pt-1' onClick={addItem}>Add Item</button>
        <ul className='list-group'>
            {
                items.map(item => (
                    <li key={item.id} className="list-group-item">{item.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default HookCounterFour