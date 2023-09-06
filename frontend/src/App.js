import './App.css'
import Checkout from './pages/Checkout'
import PilihPaket from './pages/PilihPaket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React,{ useState,useEffect } from 'react'
import ErrorWeb from './pages/ErrorWeb'
import OperatorSquare from './component/OperatorSquare'
import Cookies from 'js-cookie'




export default function App() {

    useEffect(() => {
    const userAgent = window.navigator.userAgent;
    console.log("User Agent:HJAHHAHAHHAHJHSDJKSHAJKHDAJK", userAgent);
  }, []);

  const [konfirmasiPage,setKonfirmasiPage] = useState({data:{},aman:false,link:''})
  const [theData, setTheData] = useState({})
  const nilaiCookie = Cookies.get('linkPembayaran')


  const [cekApi, setCekApi ] = useState(true)

  const ErrPage = (e) => {
    setCekApi(e)
  }

  const centerSet = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  }

  return(
    <div style={{...centerSet}}>
 
      <Router>
        <Routes>
          <Route path='/a' element={<PilihPaket koonfirmasi={konfirmasiPage} setKonfirmasiPage={setKonfirmasiPage} setData={setTheData} cekApi={cekApi} setApi={ErrPage}/>}/>
          <Route path={nilaiCookie} element={<Checkout konfirmasiPage = {konfirmasiPage} data={theData}/>}/>

          <Route path='/*' element={<ErrorWeb cekApi={cekApi}/>}/>

        {/* UNTUK DEVELOP SEMENTARA */}

        <Route path='/u' element={<OperatorSquare/>}/>

        </Routes>
        {/* {cekApi ? (<Navigate to='/'/>):(<Navigate to='/error'/>)}   */}
      </Router>
    </div>
  
  )
  }
