import React, { useState,useEffect } from 'react'
import axios from 'axios'
import InputPulsa from './component/InputPulsa';
import './App.css'
import CarouselQuota from './component/QuotaSelect/CarouselQuota';




export default function App() {
  const [dataPulsa, setDataPulsa] = useState([])
  const [dataPrefix, setDataPrefix] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  

  // untuk carauselnya
  const [lengthIsiPulsa, setLengthIsiPulsa] = useState([])
  const [dataIsiPulsa, setDataIsiPulsa] = useState([])

  // untuk inputPulsa
  const [kartuApa, setKartuApa] = useState("kosong")

  //untuk Modalnya
  const [yangDiPilih,setYangDipilih] = useState({})
  const [nomorAndKartu, setNomorAndKartu] = useState({})

  // function dataModel()

  const linkPulsa = 'http://localhost:8000/dataPulsa/'
  const linkPrefix = 'http://localhost:8000/dataPrefix/'

  useEffect(() => {
    fetchData()

  },[]);

    const fetchData = async () => {
    try {
      const resPulsa = await axios.get(linkPulsa);
      setDataPulsa(resPulsa.data);
      const resPrefix = await axios.get(linkPrefix);
      setDataPrefix(resPrefix.data);
      console.log(resPrefix)
      setIsLoading(false)
    } 
    
    catch (error) {
      alert("di catch")
      console.error('Error fetching data:', error);
    }
  };


  const [nama,setNama]= useState('')
  const [num,setNum] = useState('')

  const handleChangeNama = (e) => {
    let dat = e.target.value
    setNama(dat)

  };
const handleChangeNum = (e) =>{
  let dat = e.target.value
  setNum(dat)
}

const styleAll={
  width:"800px"
}


  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //     axios.post('http://localhost:8000', {
  //       employee:nama,
  //       department:num
  //     }, {
  //       headers: {
  //         'Content-Type':'application/json'
  //       }
  //     })
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.error('ini error',error)
  //     });

  // };




  return (
    <center>
      <div style={styleAll} className='container'>
        <h1>bPulsa</h1>
        <form>
        {/* {isLoading ?'' : dataPrefix[0].kartu} */}
        <InputPulsa prefix={dataPrefix} dataKartu={setKartuApa}/>
        <CarouselQuota pulsa={dataPulsa} kartu={kartuApa} pilih={setYangDipilih}/>
        {/* {console.log(kartuApa)} */}
        {console.log(yangDiPilih)}
        </form>
      </div>
    </center>
  )
}
