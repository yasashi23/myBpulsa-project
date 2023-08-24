import React,{useState} from 'react'
import { Button, Snackbar,Alert } from '@mui/material'
import axios from 'axios'
import { Navigate } from 'react-router'


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


function KirimBtn({txt,noWa,loading,btnDisable,setLoad, setOtpBerhasil,btnDisableName}) {
      const Link = process.env.REACT_APP_LINK+'/send-otp/'

      const [hitungKlik, setHitungKlik] = useState(0)

      const cek = btnDisable&&btnDisableName



      const handleSubmit = async(e) =>{

        if(btnDisable === true ) {
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


function VerifyOtp({ txt, verifyOtp, panjangOtp, dataBerhasilVerify, nomorWa,setKonfirmasi }) {
  const Link = process.env.REACT_APP_LINK + '/verify-otp/';
  const SendData = process.env.REACT_APP_LINK + '/dat/';

  const [terVerifikasi, setTervirifikasi] = useState('');
  const [open, setOpen] = useState(false);
  const [sukses, setSukses] = useState('error');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const { modals, ...dataSiap } = dataBerhasilVerify;

  const date = new Date();
  const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

  const sendNewDat = {
    ...dataSiap,
    jam: time,
    nomorWa: nomorWa.phone_number
  };

  const linkName = `/checkout/for-${dataSiap.nama}`

  const konfirmasi = {
    data:{...dataSiap},
    aman:true,
    link:linkName
  }

  console.log(konfirmasi)

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(Link, verifyOtp);
      const yy = response.data.message;

      if (yy === 'OTP terverifikasi') {
        setOpen(true);
        setSukses('success');
        setKonfirmasi({...konfirmasi,aman:true})
        sendData();
      } else {
        setKonfirmasi({...konfirmasi,aman:false})
        setOpen(true);
        setSukses('error');
      }

      console.log('Server response:', response.data);
      setTervirifikasi(yy);
    } catch (error) {
      console.error('Error submitting form:', error);
      console.log(Link);
    }
  };

  const sendData = async () => {
    try {
      const response = await axios.post(SendData, sendNewDat);
      console.log('Server response:', response.data);
      alert('Data berhasil dikirim');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Data gagal dikirim');
    }
  };

  if (sukses === 'success') {
    
    return <Navigate to={linkName} />;
  }

  return (
    <div>
      <Button variant="contained" disabled={panjangOtp} onClick={handleSubmit}>
        {txt}
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={sukses} sx={{ width: '100%' }}>
          {sukses === 'success' ? 'OTP Terverifikasi' : 'OTP tidak sesuai'}
        </Alert>
      </Snackbar>
    </div>
  );
}





export {
    LanjutBtn,
    KembaliBtn,
    KirimBtn,
    KembaliInfo,
    VerifyOtp
}
