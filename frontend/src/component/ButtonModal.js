import React,{useState} from 'react'
import { Button } from '@mui/material'
import axios from 'axios'


 function LanjutBtn({txt,press,setSudah}) {

      const handleKeyPress = (e) => {
        if(e.key == 'Enter'){
            e.preventDefault()
            
        }
        setSudah(true)
    }


  return (

    <div>
        <Button 
        variant='outlined'
        onClick={handleKeyPress}
        >{txt}</Button>
    </div>
  )
}



 function KembaliBtn({txt,data,setData}) {

      const handleKeyPress = (e) => {
        if(e.key == 'Enter'){
            e.preventDefault()
            
        }
        setData({...data,modals:false})
    }
  return (
    <div>
        <Button 
            variant='outlined'
            onClick={handleKeyPress}
        >{txt}</Button>
    </div>
  )
}


function KirimBtn({txt,setNoWa,noWa}) {
    

    const handleSubmit = async() =>{
    try {
      const response = await axios.post('http://192.168.100.24:8000/send-otp/',noWa);
      console.log('Server response:', response.data);
      alert('berhasil')

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('gagal')
    }
}


  return (

    <div>
        <Button 
        variant='outlined'
        onClick={handleSubmit}
        >{txt}</Button>
    </div>
  )
}

function KembaliInfo({txt,press,setSudah}) {
      const handleKeyPress = (e) => {
        if(e.key == 'Enter'){
            e.preventDefault()
            
        }
        setSudah(false)
    }
  return (

    <div>
        <Button 
        variant='outlined'
        onClick={handleKeyPress}
        >{txt}</Button>
    </div>
  )
}





export {
    LanjutBtn,
    KembaliBtn,
    KirimBtn,
    KembaliInfo
}
