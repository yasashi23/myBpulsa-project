import './App.css'
import Checkout from './pages/Checkout'
import Konfirmasi from './pages/Konfirmasi'
import PilihPaket from './pages/PilihPaket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React,{ useState } from 'react'
import { Navigate } from "react-router-dom";
import ErrorWeb from './pages/ErrorWeb'
import TungguLoading from './component/TungguLoading'
import OperatorSquare from './component/OperatorSquare'




export default function App() {
  const [konfirmasiPage,setKonfirmasiPage] = useState({data:{},aman:false,link:'/checkout/for-udin'})
  const [theData, setTheData] = useState({})



  const [cekApi, setCekApi ] = useState(true)

  const ErrPage = (e) => {
    setCekApi(e)
  }

  return(
    <center>
    <br />
      <h1>bPulsa</h1>
      {console.log(konfirmasiPage.link)}
      <br />
      <Router>
        <Routes>
          <Route path='/' element={<PilihPaket koonfirmasi={konfirmasiPage} setKonfirmasiPage={setKonfirmasiPage} setData={setTheData} cekApi={cekApi} setApi={ErrPage}/>}/>
          <Route path={konfirmasiPage.link} element={<Checkout konfirmasiPage = {konfirmasiPage} data={theData}/>}/>
          <Route path='/*' element={<ErrorWeb cekApi={cekApi}/>}/>

        {/* UNTUK DEVELOP SEMENTARA */}

        <Route path='/u' element={<OperatorSquare/>}/>

        </Routes>
        {/* {cekApi ? (<Navigate to='/'/>):(<Navigate to='/error'/>)}   */}
      </Router>
    {console.log("KONFIRMASI RESULT",cekApi)}
    </center>
  )
  }
