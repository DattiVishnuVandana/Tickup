import React from 'react'

export const ShowTask = () => {
    const TaskList=[{id:10001,name:"Task1",time:"90:09 AM "},
        {id:10002,name:"Task2",time:"10:09 AM "},
        {id:10003,name:"Task3",time:"11:09 AM "}
    ]
  return (
   <div className="showTask">
<div className="head">
    <div className='inside'>
          <span className="Todo">Todo</span>
    <span className="count">0</span>
    </div>
  <button className="clearAll">clear All</button>
</div>
<ul>
    {TaskList.map(task=>(
        <li>
            <p>
                
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
            </p>
            <div className="icons">
                 <i class="fa-solid fa-pen-to-square i1"></i>
            <i class="fa-solid fa-trash i2"></i>
            </div>
           
        </li>
    ))}
</ul>


   </div>
  )
}
