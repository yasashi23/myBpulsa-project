import './App.css'
import Checkout from './pages/Checkout'
import PilihPaket from './pages/PilihPaket'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React,{ useState } from 'react'
import ErrorWeb from './pages/ErrorWeb'
import OperatorSquare from './component/OperatorSquare'




export default function App() {
  const [konfirmasiPage,setKonfirmasiPage] = useState({data:{},aman:false,link:'/checkout/for-udin'})
  const [theData, setTheData] = useState({})



  const [cekApi, setCekApi ] = useState(true)

  const ErrPage = (e) => {
    setCekApi(e)
  }

  return(
    <div>
      {console.log(konfirmasiPage.link)}
      <Router>
        <Routes>
          <Route path='/a' element={<PilihPaket koonfirmasi={konfirmasiPage} setKonfirmasiPage={setKonfirmasiPage} setData={setTheData} cekApi={cekApi} setApi={ErrPage}/>}/>
          <Route path={'/gas'} element={<Checkout konfirmasiPage = {konfirmasiPage} data={theData}/>}/>
          <Route path='/*' element={<ErrorWeb cekApi={cekApi}/>}/>

        {/* UNTUK DEVELOP SEMENTARA */}

        <Route path='/u' element={<OperatorSquare/>}/>

        </Routes>
        {/* {cekApi ? (<Navigate to='/'/>):(<Navigate to='/error'/>)}   */}
      </Router>
    {console.log("KONFIRMASI RESULT",cekApi)}
    </div>
  )
  }
