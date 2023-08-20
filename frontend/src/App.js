
import './App.css'
import Checkout from './pages/Checkout'
import Konfirmasi from './pages/Konfirmasi'
import PilihPaket from './pages/PilihPaket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React,{ useState } from 'react'




export default function App() {
  const [konfirmasiPage,setKonfirmasiPage] = useState(false)
  const [theData, setTheData] = useState({})
  return(
    <center>
    <br />
      <h1>bPulsa</h1>
      <br />
      <Router>
        <Routes>
          <Route path='/' element={<PilihPaket setKonfirmasiPage={setKonfirmasiPage} setData={setTheData}/>}/>
          {/* <Route path='/confirm' element={<Konfirmasi/>}/> */}
          <Route path='/checkout' element={<Checkout konfirmasiPage = {konfirmasiPage} data={theData}/>}/>
        </Routes>
      </Router>
    {console.log("KONFIRMASI RESULT",konfirmasiPage)}
    </center>
  )
  }
