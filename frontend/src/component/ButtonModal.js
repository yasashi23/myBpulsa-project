import React,{useState} from 'react'
import { Button, Snackbar,Alert } from '@mui/material'
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


function VerifyOtp({txt,verifyOtp,panjangOtp, dataBerhasilVerify}) {
  const Link = process.env.REACT_APP_LINK+'/verify-otp/'
  const SendData = process.env.REACT_APP_LINK+'/dat/'

  const [terVerifikasi, setTervirifikasi] = useState('')
  const [open, setOpen] = useState(false);
  const [sukses,setSukses] = useState('error')


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };




  const {modals,...dataSiap} = dataBerhasilVerify

  const sendNewDat = {
    ...dataSiap,
    nama:'fulan/fulanah',
    jam:''
  }

  console.log({sendNewDat})

   const handleSubmit = async(e) =>{

        try {
          const response = await axios.post(Link,verifyOtp);
          let yy = response.data.message

          if(yy == "OTP terverifikasi") {
            setOpen(true)
            setSukses("success")
          }else {
            setOpen(true)
            setSukses("error")
            }

          console.log('Server response:', response.data); 
          setTervirifikasi(yy)      
        } catch (error) {
          console.error('Error submitting form:', error);
          console.log(Link)    
        }
  
  }


  const sendData = async() => {
        try {
          const response = await axios.post(SendData,sendNewDat);
          let yy = response.data.message
          console.log('Server response:', response.data); 
          alert("data mu berhasil di kirim")         
        } catch (error) {
          console.error('Error submitting form:', error);
          alert("data mu gagal di kirim")
            
        }
  }


  return(
    <div>
      <Button
      variant='contained'
      disabled={panjangOtp}
      onClick={handleSubmit}
      >
      {txt}
    </Button>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={sukses} sx={{ width: '100%' }}>
        {sukses == 'success'? "OTP Terverifikasi":"OTP tidak sesuai"}
      </Alert>
    </Snackbar>
    </div>

  )
}





export {
    LanjutBtn,
    KembaliBtn,
    KirimBtn,
    KembaliInfo,
    VerifyOtp
}
