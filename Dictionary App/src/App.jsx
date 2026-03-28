

import './App.css'


import { useState } from 'react'
import axios from 'axios'
import React from 'react'
function App() {


   const [words, setwords] = useState("")
   const [meaning, setmeaning] = useState(null)


   const handleClick = async()=>{
      console.log("button clicked");


      if(!words){
        alert("Enter your words")
        return
      }
      try{
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`)
        console.log(response);
        // setmeaning(response.data[0].meanings[0].definitions[0].definition)
        setmeaning(response.data)
      }
     
 
   catch(err){
    console.log(err);
   }
   
  }


  return (
    <div className='h-screen w-full'>
           <div className='h-45 w-full bg-slate-700 flex justify-center gap-2 flex-col items-center'>


            <h2 className='text-3xl text-white '>Simple Dictionary</h2>
            <h3 className='text-1xl text-gray-500'>Find meaning of your words :</h3>


           <div className=' flex justify-around gap-2'>
              <input type="text" placeholder='Enter your words'  className='bg-white w-60 h-8 border-2 border-black px-6' value={words} onChange={(e)=> setwords(e.target.value)}/>
              <input type="submit" className='bg-blue-500 rounded-1xl w-16' onClick={handleClick}/>
            </div>
          </div>




          {meaning && <>
              <div className='flex  mt-8 h-screen w-full flex-col items-center'>


                <div className='flex gap-3'>
                <h2 className='text-3xl font-bold'>Meaning:</h2>
                <h4 className='text-2xl py-1'>{meaning?.[0]?.meanings?.[0]?.definitions?.[0]?.definition || 'Not Available'}</h4>
                </div>


               <div className='flex gap-3' >
                <h2 className='text-3xl font-bold'>Synonym:</h2>
                <h4 className='text-2xl py-1'>{meaning[0].meanings[0].synonyms[0]|| 'Not Available'}</h4>
               </div>


                <div className='flex gap-3' >
                <h2 className='text-3xl font-bold'>Antonym:</h2>
                <h4 className='text-2xl py-1'>{meaning[0].meanings[0].antonyms[0]|| 'Not Available'}</h4>
               </div>


                 <div className='flex gap-3' >
                <h2 className='text-3xl font-bold'>Example:</h2>
                <h4 className='text-2xl py-1'>{meaning[0].meanings[0].definitions[0].example || "Not Available"}</h4>
               </div>
              </div>
         
          </> }


         
    </div>
  )
}


export default App

