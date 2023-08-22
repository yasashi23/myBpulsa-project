import './App.css'
import Checkout from './pages/Checkout'
import Konfirmasi from './pages/Konfirmasi'
import PilihPaket from './pages/PilihPaket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React,{ useState } from 'react'
import { Navigate } from "react-router-dom";
import ErrorWeb from './pages/ErrorWeb'
import TungguLoading from './component/TungguLoading'




export default function App() {
  const [konfirmasiPage,setKonfirmasiPage] = useState(false)
  const [theData, setTheData] = useState({})

  const [cekApi, setCekApi ] = useState(true)

  const ErrPage = (e) => {
    setCekApi(e)
  }

  return(
    <center>
    <br />
      <h1>bPulsa</h1>
      <br />
      <Router>
        <Routes>
          <Route path='/' element={<PilihPaket setKonfirmasiPage={setKonfirmasiPage} setData={setTheData} cekApi={cekApi} setApi={ErrPage}/>}/>
          <Route path='/checkout' element={<Checkout konfirmasiPage = {konfirmasiPage} data={theData}/>}/>
          <Route path='/error' element={<ErrorWeb cekApi={cekApi}/>}/>

        {/* UNTUK DEVELOP SEMENTARA */}

        {/* <Route path='/' element={<TungguLoading/>}/> */}

        </Routes>
        {/* {cekApi ? (<Navigate to='/'/>):(<Navigate to='/error'/>)}   */}
      </Router>
    {console.log("KONFIRMASI RESULT",cekApi)}
    </center>
  )
  }
