import React, { useState } from 'react'
import axios from 'axios'
import InputPulsa from './component/InputPulsa';
import './App.css'
import CarouselQuota from './component/QuotaSelect/CarouselQuota';




export default function App() {
  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');

  const [nama,setNama]= useState('')
  const [num,setNum] = useState('')

  const handleChangeNama = (e) => {
    let dat = e.target.value
    setNama(dat)

  };
const handleChangeNum = (e) =>{
  let dat = e.target.value
  setNum(dat)
}

const styleAll={
  width:"800px"
}


  const handleSubmit = (event) => {
    event.preventDefault();

      axios.post('http://localhost:8000', {
        employee:nama,
        department:num
      }, {
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error('ini error',error)
      });

  };




  return (
    <center>
      <div style={styleAll} className='container'>
        <h1>bPulsa</h1>
        <form onSubmit={handleSubmit}>

        <InputPulsa/>
        <CarouselQuota/>

        </form>
      </div>
    </center>
  )
}
