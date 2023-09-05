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

  const [jamTerakhir,setJamTerakhir] = useState('')

  const ErrPage = (e) => {
    setCekApi(e)
  }
  const centerContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }

  return(
    <div  style={centerContainer}>
      {console.log(konfirmasiPage.link)}
      <Router>
        <Routes>
          <Route path='/a' element={<PilihPaket koonfirmasi={konfirmasiPage} setKonfirmasiPage={setKonfirmasiPage} setData={setTheData} cekApi={cekApi} setApi={ErrPage} setJamTerakhir={setJamTerakhir}/>}/>
          <Route path={'/gas'} element={<Checkout konfirmasiPage = {konfirmasiPage} data={theData} jamTerakhir={jamTerakhir}/>}/>
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
