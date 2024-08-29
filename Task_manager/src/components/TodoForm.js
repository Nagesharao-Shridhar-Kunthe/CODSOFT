import React from 'react'
import { useState,useEffect,useRef } from 'react'
export default 
function TodoForm(props) {
   
  const [input,setinput]=useState('');

  const inputRef=useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  })

  const handleChange=e=>{
    setinput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
  
    props.onSubmit({
      id:Math.floor(Math.random()*10000),
      text:input
     })
     setinput('');
   }

  return (
    
        <form className='todo-form' onSubmit={ handleSubmit}>
          <input
           className='todo-input' 
           type='text' 
           placeholder='Add Your Todays Task' 
           value={input} 
           name='text'
           onChange={handleChange}
           ref={inputRef}
          ></input>
          <button  onClick={handleSubmit} className='todo-button'>Add Todo</button>
        </form>

    
       
  )
}

