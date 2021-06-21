import React from 'react';
import { useEffect } from 'react';
import './index.css';
import { useState } from 'react';


const Weather = () => {
   
  const[city,setCity]=useState(null);
  const[search,setSearch]=useState('Mumbai');

  useEffect(  () => {

    const fetchApi = async () => {
      const url='https://api.openweathermap.org/data/2.5/weather?q=${search}&appid={e9667720061066b973b56be4b1090503}';
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
    };
    fetchApi();
  })

  return( 
    <>
    <div className='Main_div'>
      <div className='button'>
        <input type='search' placeholder='Enter City' onchange = {
          (event)=> { setSearch(event.target.value)}} />
      </div><br></br>
      <div className='abcd'>
      <h2>
      <i class="fa fa-street-view" aria-hidden="true"></i>
      Pune</h2>
      </div><br/>
      <div>
        <h6>min:5.24 max:25</h6>
      </div>
      <div className='wave'> 
      <div className='wave -one'/>
      <div className='wave -two'/>
      </div>
    </div>
    </>

    );
}
export default Weather;