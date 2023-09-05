import React, { useState,useEffect } from 'react'
import axios from 'axios'
import InputPulsa from '../component/InputPulsa';
import CarouselQuota from '../component/QuotaSelect/CarouselQuota';
import Modal from '../component/Modal';
import CaraPengisian from '../component/CaraPengisian';
import kelas from '../scssFile/pilihPaket.module.scss'



    
export default function PilihPaket({cekApi, setApi, setKonfirmasiPage,konfirmasi,setJamTerakhir}) {

const [dataPulsa, setDataPulsa] = useState([])
const [dataPrefix, setDataPrefix] = useState([])
const [isLoading, setIsLoading] = useState(false);
const [open, setOpen] = useState(true);


const [kelar,setKelar] = useState(false)
const [dataPulsaIndex,setDataPulsaIndex] = useState(-1)

const [nomorAndKartu, setNomorAndKartu] = useState({kartu:"kosong",nomor:"kosong",pulsa:"kosong",harga:"kosong",
modals:false})


  const[nomorBlmBenar, setNomorBlmBenar] = useState(true)





  // function dataModel()
  const Link = process.env.REACT_APP_LINK
  const linkPulsa = Link+'/dataPulsa/'
  const linkPrefix = Link+'/dataPrefix/'

  console.log(linkPrefix)

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

  };






  return (

    

       <center className={kelas.containerPilihPaket}>
          
        {cekApi ? (<div>

            <div>
              <h1>biPulsa</h1>
              <p>Isi Pulsa mudah dan murah</p>
            </div>


          <div >
          <InputPulsa 
            prefix={dataPrefix} 
            noKaSet = {setNomorAndKartu} 
            noKa={nomorAndKartu}
            pulsa={dataPulsa}
            dataPulsaIndex={dataPulsaIndex}
            />

          <CarouselQuota 
            pulsa={dataPulsa} 
            kartu={nomorAndKartu} 
            pilih={setNomorAndKartu}
            cekNomor={nomorBlmBenar}
            setOpen={setOpen}
            setDataPulsaIndex={setDataPulsaIndex}
            />

          {console.log(isLoading)}

          <Modal 
            data={nomorAndKartu} 
            setData={setNomorAndKartu} 
            setKelar={setKelar} 
            loading={isLoading} 
            setKonfirmasi={setKonfirmasiPage}
            konfirmasi={konfirmasi}
            cekNomor={nomorBlmBenar}
            open={open}
            setOpen={setOpen}
            setJamTerakhir={setJamTerakhir}

            />
          </div>

            <CaraPengisian/>

          </div>) : <h1>WEBSITE SEDANG GANGGUAN, silahkan coba lagi nanti</h1>}



        </center> 
  )

  }
