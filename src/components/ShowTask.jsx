import React from 'react'

export const ShowTask = ({tasklist,setTasklist}) => {
   const handleDelete=(id)=>{
    const updatedTasklist=tasklist.filter(todo=>todo.id!=id);
    setTasklist(updatedTasklist);
   }
  return (
   <div className="showTask">
<div className="head">
    <div className='inside'>
          <span className="Todo">Todo</span>
    <span className="count">{tasklist.length}</span>
    </div>
  <button className="clearAll" onClick={()=>setTasklist([])}>clear All</button>
</div>
<ul>
    {tasklist.map(task=>(
        <li key={task.id}>
            <p>
                
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
            </p>
            <div className="icons">
                 <i className="fa-solid fa-pen-to-square i1"></i>
            <i className="fa-solid fa-trash i2" onClick={()=>handleDelete(task.id)}></i>
            </div>
           
        </li>
    ))}
</ul>


   </div>
  )
}
