import React, { useState,useEffect } from 'react'
import axios from 'axios'
import InputPulsa from './component/InputPulsa';
import './App.css'
import CarouselQuota from './component/QuotaSelect/CarouselQuota';
import Modal from './component/Modal';




export default function App() {
  const [dataPulsa, setDataPulsa] = useState([])
  const [dataPrefix, setDataPrefix] = useState([])
  const [isLoading, setIsLoading] = useState(true);

      const [kelar,setKelar] = useState(false)
  
  const [nomorAndKartu, setNomorAndKartu] = useState({kartu:"kosong",nomor:"kosong",pulsa:"kosong",harga:"kosong",
  modals:false})

  

  const [konfirmasi,setKonfirmasi] = useState({nama:"fulan/fulanah", nomorWa:"08XXXXXX"})

  // function dataModel()

  const linkPulsa = 'http://192.168.100.17:8000/dataPulsa/'
  const linkPrefix = 'http://192.168.100.17:8000/dataPrefix/'

  useEffect(() => {
    fetchData()

  },[]);

    const fetchData = async () => {
    try {
      // alert("aman")
      const resPulsa = await axios.get(linkPulsa);
      setDataPulsa(resPulsa.data);
      const resPrefix = await axios.get(linkPrefix);
      setDataPrefix(resPrefix.data);
      console.log(resPrefix)
      setIsLoading(false)
    } 
    
    catch (error) {
      // alert(`di catch${error}`)
      console.error('Error fetching data:', error);
    }
  };


const styleAll={
  width:"800px"
}

  const handleSubmit = async (event) => {
    event.preventDefault();
        setKelar(true)
    try {
      const response = await axios.post('http://192.168.100.17:8000/', konfirmasi);
      alert("berhasil")
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("gagal")
    }

  };


  return (
    <center>
      <div style={styleAll} className='container'>
        <h1>bPulsa</h1>
        <table>
          <tr>
            <td>akses disini :  </td>
            <td>http://192.168.100.17:3000</td>
          </tr>
        </table>
        <form onSubmit={handleSubmit}>
        {/* {isLoading ?'' : dataPrefix[0].kartu} */}
      <InputPulsa prefix={dataPrefix} noKaSet = {setNomorAndKartu} noKa={nomorAndKartu}/>
        <CarouselQuota pulsa={dataPulsa} kartu={nomorAndKartu} pilih={setNomorAndKartu}/>
        {/* {console.log(kartuApa)} */}
        {console.log("nomor_kartu",nomorAndKartu)}
        {console.log("konfirmasi",konfirmasi)}
        <Modal data={nomorAndKartu} setData={setNomorAndKartu} konfirmasi={konfirmasi} setKonfirmasi={setKonfirmasi} kelar={kelar} setKelar={setKelar}/>
        </form>
      </div>
    </center>
  )
}
