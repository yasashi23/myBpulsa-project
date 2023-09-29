import './App.css'
import Checkout from './pages/Checkout'
import PilihPaket from './pages/PilihPaket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React,{ useState,useEffect } from 'react'
import ErrorWeb from './pages/ErrorWeb'
import OperatorSquare from './component/OperatorSquare'
import Cookies from 'js-cookie'
import {io} from 'socket.io-client'




export default function App() {

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
  }, []);



  function emitnya(){
    return "gg"
    // alert(socket.connected)
  }


  const [dataPulsa, setDataPulsa] = useState([])
  const [dataPrefix, setDataPrefix] = useState([])
  const [konfirmasiPage,setKonfirmasiPage] = useState({data:{},aman:false,link:''})
  const [theData, setTheData] = useState({})
  // const nilaiCookie = Cookies.get('linkPembayaran')
  const [link,setLink] = useState({link:'', token:''})


  const [cekApi, setCekApi ] = useState(true)
  // const [hitung,setHitung] = useState(0)

  // const [jamTerakhir,setJamTerakhir] = useState('')


  const ErrPage = (e) => {
    setCekApi(e)
  }
  const centerContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }

  const centerSet = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  }


  return(

    <div  style={centerContainer}>
      {/* {console.log(nilaiCookie)} */}

    {/* <div style={{...centerSet}}> */}
 
      <Router>
        <Routes>
          <Route path='' element={<PilihPaket koonfirmasi={konfirmasiPage} setKonfirmasiPage={setKonfirmasiPage} setData={setTheData} cekApi={cekApi} setApi={ErrPage} emitnya={emitnya} link={setLink}/>}/>

          {/* <Route path={link.link === ""? '/checkout' : `/checkout-${link.link}`} element={<Checkout konfirmasiPage = {konfirmasiPage} data={theData} sudahOrder={link}/>}/> */}
          {/* `/checkout-${link.link}` */}

          <Route path={`/checkout/${link.link}`} element={<Checkout konfirmasiPage = {konfirmasiPage} data={theData} sudahOrder={link}/>}/>
          
          <Route path='/*' element={<ErrorWeb cekApi={cekApi}/>}/>

        {/* UNTUK DEVELOP SEMENTARA */}

        <Route path='/u' element={<OperatorSquare/>}/>


        </Routes>
        <button onClick={emitnya}>COBA KLIK </button>
        {/* {cekApi ? (<Navigate to='/'/>):(<Navigate to='/error'/>)}   */}
      </Router>
    </div>
    // </div>
  
  )
  }
