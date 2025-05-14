

export const AddTask = ({tasklist,setTasklist,task,setTask}) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
       
        if(task.id){
             
              const date=new Date();
              const updatedTaskList=tasklist.map((todo)=>
                todo.id===task.id?
{                id:task.id, name : e.target.taskInp.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }:todo
              )
              setTasklist(updatedTaskList)
           setTask({})
              
        }else{
         const date=new Date();
        
        const newTask={
            id:date.getTime(),
            name:e.target.taskInp.value,
            time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasklist([...tasklist,newTask])
  setTask({})
    }
       
    }
  return (
    <div className='middle'>
        <form onSubmit={handleSubmit}>
            <input type="text"  name="taskInp" value={task.name || ""} placeholder='enter u r task' maxLength={25} autoComplete='on'onChange={e=>setTask({...task,name:e.target.value})} />
            <button type="submit">{task.id?"Update":"Add"}</button>
        </form>
    </div>
  )
}
