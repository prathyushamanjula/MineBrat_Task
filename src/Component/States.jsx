import React, { useEffect, useRef, useState } from 'react';
import Cities from '../Component/Cities';

function States() {
  const[states, setStates] = useState([]);
  let [selectedState,setSelectedState]=useState("select a state")
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('/api/v1/states');
        let data= await response.json()
        setStates(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchStates();
  }, []);

  

  return (
    <div id='background'>
      <h1 id="pop">PLEASE SELECT ANY OPTION</h1>
      <ul>
      <select  name="" value={states} id="sect" onChange={(e)=>{setSelectedState(e.target.value)}} >
        <option value="" className='opt'>{selectedState}</option>
        {states.map((item, index) => (
            <option value={item.stateName} key={index} className='opt' >{item.stateName}</option>
        ))}
      </select>

      <Cities id={states} state={selectedState}/>
      </ul>
    </div>
  );
}

export default States;