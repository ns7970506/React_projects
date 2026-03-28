import { FileText } from 'lucide-react'
import './App.css'
import { useState } from 'react'
import axios from 'axios'



function App() {
  
const [word, setword] = useState("")


const handleClick = async ()=>{
  console.log("Buttom clicked");
  console.log(word);
  
  if(!word){
    alert("Enter your sentences")
    return
  }
  try{
      const response = await  axios.get(`https://api.datamuse.com/words?ml=${word}`)
      console.log(response.data);
  }
  catch(err){
    console.log(err);
    

  }
 
 
  
  
}





  return (
   <div className='h-screen w-full bg-zinc-200'>
 
    <div className='flex gap-1.5 justify-center py-7 flex-col items-center'>

      <div className='flex gap-2'>
        <FileText size={40} className='text-blue-800'/>
        <h1 className='text-3xl font-bold'>Word Analytics + Writing Assistant</h1>
    </div>

    <div className='text-gray-700'>Paste your text below improve your writing </div>

</div>


    <div className='h-screen w-full flex ml-12'>
      <div className='h-[76%] w-[55%] bg-white '>

        <div className='flex justify-between '>
          <h3 className=' font-bold px-4 py-4'>Your Text</h3>

          <button className='bg-gray-200 h-9 w-48 mt-5 mr-4 rounded-2xl text-blue-800 font-bold' onClick={handleClick}>Improve Sentence</button>


        </div>

        <textarea name="text" id="" className='h-40 w-[90%] border-2 border-blue-600 ml-5 mt-2 rounded-2xl ' value={word} onChange={(e)=>setword(e.target.value)}></textarea>

      </div>
    
</div>



   </div>
  )
}

export default App
