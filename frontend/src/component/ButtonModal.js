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


function KirimBtn({txt,noWa,loading,btnDisable,setLoad, setOtpBerhasil,sekaliSubmitAja,setSekaliSubmitAja}) {
      const Link = process.env.REACT_APP_LINK+'/send-otp/'

      const [hitungKlik, setHitungKlik] = useState(0)
      
      const handleSubmit = async(e) =>{

        if(btnDisable === true) {
          e.preventDefault()
        }

        
        else{
          
          
          if(hitungKlik < 2) {
                loading(true)
                setLoad(true)
                try {
                  const response = await axios.post(Link,noWa);
                  setOtpBerhasil(true)
                  console.log('Server response:', response.data);
                  setTimeout(()=>{loading(false)},1500)
                  
                } catch (error) {
                  console.error('Error submitting form:', error);
                  setOtpBerhasil(false)
                  console.log(Link)
                  setTimeout(()=>{loading(false)},2000)
            
              
            }
          }else alert('kamu ngeklik lebih dari 1 kali')

  
  }
    setLoad(false)

}
  return (

    <div>
        {console.log(hitungKlik)}
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


function VerifyOtp({txt,verifyOtp,panjangOtp, sekaliSubmitSaja,setSekaliSubmitAja}) {
  const Link = process.env.REACT_APP_LINK+'/verify-otp/'

  const [terVerifikasi, setTervirifikasi] = useState('')


   const handleSubmit = async(e) =>{


        try {
          const response = await axios.post(Link,verifyOtp);
          console.log('Server response:', response.data); 
          setTervirifikasi(response.data.message)
          alert(`${terVerifikasi}`)         
        } catch (error) {
          console.error('Error submitting form:', error);
          console.log(Link)    
        }
  
  }


  return(
    <Button
      variant='contained'
      disabled={panjangOtp}
      onClick={handleSubmit}

    >
      {txt}
    </Button>
  )
}





export {
    LanjutBtn,
    KembaliBtn,
    KirimBtn,
    KembaliInfo,
    VerifyOtp
}
