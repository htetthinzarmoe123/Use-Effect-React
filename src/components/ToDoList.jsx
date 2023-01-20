import React, { useState } from 'react'

function ToDoList() {

    const[items,setItems] = useState([]);
    const[input,setInput] = useState('');
    const[Completecount,setCompletecount] = useState(0);
    const addItem = () =>{
        setItems([...items,{
            id:items.length,
            value:input,
            complete:false
        }]);
        setInput('');
    }

    const completedTask = (id) =>{
            let list = items.map((item) =>{
                let task = {};
                if(id == item.id){
                    if(!item.complete){ 
                        setCompletecount(Completecount + 1); //true
                        task = {...item,complete:true};
                    }else{
                        setCompletecount(Completecount - 1); //false
                        task = {...item,complete:false};
                    }
                }else{
                    task = {...item};
                }
                return task;
            })
            setItems(list);
            setInput('');
    }


  return (
    <div>
        <div className='float-right m-2'>
            Completed Task = {Completecount}
        </div>
        <div className ="input-group mb-3">
            <input type="text" className='form-control' onChange={e=>setInput(e.target.value)} />
            <button className='btn btn-primary btn-sm input-group-text' onClick={addItem}>+</button>
        </div>
        <ul className='list-group'>
            {
                items.map(item => (
                    <li key={item.id} className="list-group-item"
                     onClick={()=>completedTask(item.id)}
                     style={{cursor:"pointer",textDecoration:item.complete && "line-through"}}>{item.value}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ToDoList