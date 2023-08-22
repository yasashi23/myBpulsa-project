import React, { useState,useEffect } from 'react'
import axios from 'axios'
import InputPulsa from '../component/InputPulsa';
import CarouselQuota from '../component/QuotaSelect/CarouselQuota';
import Modal from '../component/Modal';



export default function PilihPaket({setKonfirmasiPage, setData, cekApi, setApi}) {

const [dataPulsa, setDataPulsa] = useState([])
const [dataPrefix, setDataPrefix] = useState([])
const [isLoading, setIsLoading] = useState(false);

const [kelar,setKelar] = useState(false)

const [nomorAndKartu, setNomorAndKartu] = useState({kartu:"kosong",nomor:"kosong",pulsa:"kosong",harga:"kosong",
modals:false})


  const [sukses, setSukses] = useState(false)

  const [konfirmasi,setKonfirmasi] = useState({nama:"fulan/fulanah", nomorWa:"08XXXXXX"})

  // function dataModel()

  const linkPulsa = 'http://192.168.100.17:8000/dataPulsa/'
  const linkPrefix = 'http://192.168.100.17:8000/dataPrefix/'

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
      setApi(true)
    } 
    
    catch (error) {


      console.error('Error fetching data:', error);
      setApi(false)
      
      
    }
    // return <Navigate to='/error'/>
  };


const styleAll={
  width:"800px"
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    setSukses(true)
    try {
      const response = await axios.post('http://192.168.100.17:8000/', konfirmasi);
      console.log('Server response:', response.data);
      alert('berhasil')

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('gagal')
    }

    setKonfirmasiPage(true)
    setData(konfirmasi)
    setSukses(false)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    setKelar(true)
    


  };


  return (

    

       <div style={styleAll} className='container'>
          
        {cekApi ? (<div>
          <table>
            <tr>
              <td>akses disini :  </td>
              <td>http://192.168.100.24:3000</td>
            </tr>
          </table>

          <form onSubmit={handleSubmit} >
          <InputPulsa prefix={dataPrefix} noKaSet = {setNomorAndKartu} noKa={nomorAndKartu}/>
          <CarouselQuota pulsa={dataPulsa} kartu={nomorAndKartu} pilih={setNomorAndKartu}/>
          {console.log(isLoading)}
          <Modal data={nomorAndKartu} setData={setNomorAndKartu} konfirmasi={konfirmasi} setKonfirmasi={setKonfirmasi} kelar={kelar} setKelar={setKelar} loading={isLoading} sukses={sukses} />
          </form>
          </div>) : <h1>WEBSITE SEDANG GANGGUAN, silahkan coba lagi nanti</h1>}



        </div> 
  )

  }
