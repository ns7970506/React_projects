import { useState } from 'react'
import './App.css'

function App() {
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [task, settask] = useState([])


  
   const submitHandler = (e)=>{
    e.preventDefault()
   settitle('')
   setdesc('')
    settask([...task,{title,desc}])
    console.log(task);
    }

     const deleteHandler = (idx)=>{
      let copytask =[...task]
      copytask.splice(idx,1)
      settask(copytask)
 }
    
    let renderTask = <h2>No task Available</h2>
    if(task.length>0){
    renderTask = task.map((elem,idx)=>{
      return(
        <li key={idx} className='flex items-center justify-between mb-5'>
        <div className='flex justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{elem.title}</h5>
          <h6 className='text-xl font-semibold'>{elem.desc}</h6>
        </div>
        <button onClick={()=>{
          deleteHandler(idx)
        }} 
        className='bg-red-400 text-white rounded font-bold w-20'>Delete</button>
        </li>
      )
    })
  }

  return (
   <div className='h-screen w-full'>
   <h1 className=' bg-black h-20 text-white text-4xl text-center font-bold py-3.5'>Nikhil's To-do List</h1>
   <form onSubmit={submitHandler}>
    <input className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Title here' type="text" value={title} onChange={(e)=>{
        settitle(e.target.value)
    }} />
    <input className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Description here' type="text" value={desc} onChange={(e)=>{
        setdesc(e.target.value)
    }}/>
    <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded-2xl m-5'>Add Task</button>
   </form>
    <hr />
   <div className='p-8 bg-slate-200'>
    <ul>{renderTask}</ul>
   </div>
   </div>
  )
}

export default App