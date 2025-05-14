

export const AddTask = ({tasklist,setTasklist}) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const date=new Date();
        const newTask={
            id:date.getTime(),
            name:e.target.task.value,
            time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasklist([...tasklist,newTask])
        e.target.task.value=""
    }
  return (
    <div className='middle'>
        <form onSubmit={handleSubmit}>
            <input type="text"  name="task" placeholder='enter u r task' maxLength={25} autoComplete='on'/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
