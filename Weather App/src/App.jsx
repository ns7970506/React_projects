
import './App.css'
import { Cloud } from "lucide-react";
import { Settings } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios'

function App() {
 
const [city, setcity] = useState()
const [weather, setweather] = useState(null)

  const handleClick = async()=>{
    console.log("Button clicked");

    if (!city) {
    alert("Enter city name");
    return;
  }

    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'Your Api key'}&units=metric`)
      console.log(response);
      setweather(response.data)
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <div>
      <div className='flex justify-between'>

        <div className='flex'>
      <Cloud className='mt-3 ml-3 w-16 h-16 text-blue-600'/>
      <h3 className='mt-6 text-blue-700 font-bold text-3xl'>Atmosphere</h3>
      
      </div>

      <div className='flex mt-6 w-64 mr-40 flex-col gap-2 justify-center'>
        <input className='w-70 border px-6 py-1 rounded mr-50' type="text" placeholder='Enter Your City' value={city} onChange={(e) => setcity(e.target.value)} />
       <button className='mt-5 ml-14 rounded-2xl bg-blue-700 w-30' onClick={handleClick}>Check Weather</button>
      </div>

      

      <div>
      <Settings className='mt-3 mr-5'/>
      </div>

      </div>


    <div className='h-screen w-full bg-white flex justify-center items-center'>
    
      <div className='h-96 w-80 bg-linear-to-b from-blue-900 to-sky-400 rounded-xl'>
         
         <div>

          <div className='flex mt-8 justify-center gap-1.5'>
            <MapPin className='h-10 w-10 text-white'/>
          
            <h2 className='text-4xl text-white'>{weather?.name}</h2>
          
          </div>

          <div className='flex mt-9 justify-center gap-2'>
            <h1 className='font-bold text-5xl text-white'>{weather?.main?.temp}</h1>
            <h3 className='font-semibold text-2xl text-white'>o</h3>
          </div>


          <div className='flex justify-center mt-8 '>
            <p className='font-semibold text-3xl text-white'>{weather?.weather?.[0]?.description}</p>
          </div>

          <div className='flex justify-around mt-10 mx-5'>
            <button className='text-2xl text-white'>{weather?.main?.temp_min}</button>
            <button className='text-2xl text-white'>{weather?.main?.temp_max}</button>
          </div>
         </div>
      </div>

    </div>
    </div>
  )
}

export default App
