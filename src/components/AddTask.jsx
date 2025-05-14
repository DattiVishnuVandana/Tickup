import React from 'react'

export const AddTask = () => {
  return (
    <div className='middle'>
        <form action="">
            <input type="text"  name="task" placeholder='enter u r task' maxLength={25} autoComplete='on'/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
