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


function KirimBtn({txt,noWa,loading,btnDisable}) {
      const Link = process.env.REACT_APP_LINK+'/send-otp/'


      const handleSubmit = async(e) =>{

        if(btnDisable === true) {
          e.preventDefault()
        }

        else{

        loading(true)
        try {
          const response = await axios.post(Link,noWa);
          console.log('Server response:', response.data);
          
        } catch (error) {
          console.error('Error submitting form:', error);
          console.log(Link)
      // alert('gagal')
    }
    setTimeout(()=>{loading(false)},1500)
    }

}
  return (

    <div>
        <Button 
        variant='outlined'
        onClick={handleSubmit}
        disabled={btnDisable}
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
