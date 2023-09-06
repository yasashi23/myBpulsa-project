import React,{useState} from 'react'
import { Button, Snackbar,Alert } from '@mui/material'
import axios from 'axios'
import { Navigate } from 'react-router'
import kelas from '../scssFile/buttonModal.module.scss'
import Cookies from 'js-cookie'


 function LanjutBtn({txt,setSudah,cekNomor,open}) {
    const[disableBtn,setDisableBtn] = useState(true)


      const handleKeyPress = (e) => {
        if(e.key == 'Enter'){
            e.preventDefault()
          }
        setSudah(true)

    }
    const sxStyle = {
      color:'white',
      border:'none',
      fontWeight:'600',
      background:(open? 'transparent':'#6FCA61')
    }
  return (

    <div>
      {console.log(cekNomor.length)}
        <Button 
        variant='outlined'
        onClick={handleKeyPress}
        disabled={open}
        sx={{...sxStyle }}
        className={kelas.nextBtn}
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
            sx={{background:'#E84545',color:'white',border:'none',fontWeight:'600'}}
            className={kelas.kembaliBtnNumber}
        >{txt}</Button>
    </div>
  )
}


function KirimBtn({txt,noWa,loading,btnDisable,setLoad, setOtpBerhasil,btnDisableName,start}) {
      const Link = process.env.REACT_APP_LINK+'/send-otp/'

      const [hitungKlik, setHitungKlik] = useState(0)

      const cek = btnDisable&&btnDisableName



      const handleSubmit = async(e) =>{
        if(btnDisable === true ) {
          e.preventDefault()
          
        }

        
        else{
          
          if(hitungKlik < 2 || e.key === 'Enter') {

                loading(true)
                setLoad(true)
                try {
                  const response = await axios.post(Link,noWa);
                  setOtpBerhasil(true)
                  start()
                  console.log('Server response:', response.data);
                  setTimeout(()=>{loading(false)},2500)
                  
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

      const sxStyle = {
        color:'white',
        border:'none',
        fontWeight:'600',
        background:(btnDisable? 'transparent':'#6FCA61')
      }

  return (

    <div>
        {console.log(hitungKlik)}
        <Button 
        variant='outlined'
        onClick={handleSubmit}
        disabled={btnDisable}
        sx={{...sxStyle}}
        className={kelas.kirimOtpBtn}
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
        sx={{border:'none', color:'black', fontWeight:'800', fontSize:'12px',opacity:'.7'}}
        className={kelas.kembaliInfoBtn}
        ><u>{txt}</u></Button>
    </div>
  )
}


function VerifyOtp({ txt, verifyOtp, panjangOtp, dataBerhasilVerify, nomorWa,setKonfirmasi,setWarningOtp }) {
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
    data:{...sendNewDat},
    aman:true,
    link:linkName,
  }

  console.log(konfirmasi)

  function sebelumRedirect(){
    setSukses('success');
  }

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post(Link, verifyOtp);
      const yy = response.data.message;

      if (yy === 'OTP terverifikasi') {
        setOpen(true);
        setTimeout(sebelumRedirect,1500)
        setWarningOtp('success')
        console.log("SEND NEW DAT", sendNewDat)
        Cookies.set('linkPembayaran',linkName,{expires:0.125}) 
        setKonfirmasi({...konfirmasi,aman:true})
        sendData();
      } else {
        setKonfirmasi({...konfirmasi,aman:false})
        setOpen(true);
        setSukses('error');
        setWarningOtp('error')
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
        const sxStyle = {
        color:(panjangOtp? 'gray':'white'),
        border:'none',
        fontWeight:'600',
        background:(panjangOtp? 'transparent':'#6FCA61')
      }

  return (
    <div>
      <Button variant="outlined" 
      disabled={panjangOtp} 
      onClick={handleSubmit}
      style={{...sxStyle}}
      className={kelas.verifyBtn}
      >
        {txt}
      </Button>
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
