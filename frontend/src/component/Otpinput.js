import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import {Alert} from '@mui/material'

export default function Otpinput({otp,setOtp, nomorWa, setVerifyOtp,panjangOtp,pesanOtp,setPesanOtp}) {
    

    const contStyle = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'3px'
    }
    const inpStyle ={
        width:'3rem',
        height:'4rem',
        fontSize:'2rem'
    }


      const handleKeyPress = (e) => {
        if(e.key == 'Enter'){
            e.preventDefault()
        }
    }

    const dataOtp = (e) =>{
        setOtp(e)
        setVerifyOtp({...nomorWa,otp:e})
        if(e.length === 4) {
            panjangOtp(false)
        }
        else{
            panjangOtp(true)
        }
    }

  return (
    <div>
    <h3>Masukkan Kode OTPnya</h3>
    <br/>
     <OtpInput
      value={otp}
      onChange={dataOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      containerStyle={contStyle}
      inputStyle={inpStyle}
    />
    {/* <Alert variant="outlined" severity="error" sx={{p:0}}>UDIN NGANGA</Alert> */}

    </div>
  )
}
