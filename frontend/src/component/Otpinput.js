import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import {Alert} from '@mui/material'
import kelas from '../scssFile/otpInput.module.scss'

export default function Otpinput({otp,setOtp, nomorWa, setVerifyOtp,panjangOtp,warningOtp,setWarningOtp}) {
    

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
            setWarningOtp('mengisi')
        }
    }

  return (
    <div className={kelas.modalInputOtp}>
    <h3>Masukkan Kodenya</h3>
    <p>Masukkan kode OTP yang sudah<br/>dikirimkan ke no WA anda.</p>
    <br/>
     <OtpInput
      value={otp}
      onChange={dataOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      containerStyle={kelas.otpInputValue}
      inputStyle={`${kelas.otpInputannya} ${warningOtp === 'success'? kelas.Berhasil: warningOtp === 'mengisi'?  kelas.mengisi : kelas.Gagal}`}
    />
    {/* <Alert variant="outlined" severity="error" sx={{p:0}}>UDIN NGANGA</Alert> */}
    {console.log({warningOtp})}

    </div>
  )
}
