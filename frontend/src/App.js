import React, { useState } from 'react'
import axios from 'axios'






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


  const handleSubmit = (event) => {
    event.preventDefault();

      axios.post('/api/submit-data/', {
        nama,num
      }, {
        headers: {
          'X-CSRFToken': csrfToken,
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
    <div>
    <center>

      <h1>HELLO WORDL</h1>

      <form onSubmit={handleSubmit}>


          <label htmlFor="nama">Namamu</label>
         <input type="text" name="nama" value={nama} onChange={handleChangeNama} />
              
          <label htmlFor="nomor">No.Hpmu</label>
         <input type="number" name="nomor" value={num} onChange={handleChangeNum} />

          <button type="submit">kirimkan</button>

      </form>
      </center>
    </div>
  )
}
