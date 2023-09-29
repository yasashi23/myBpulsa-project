import React,{useEffect,useState} from 'react'
import DanaPayment from '../component/danaPayment'
import CheckoutComponent from '../component/checkoutComponent'
import kelas from '../scssFile/checkoutScssFile/checkoutPage.module.scss'
import axios from 'axios'
import {io} from 'socket.io-client'


export default function Checkout({sudahOrder, konfirmasiPage}) {

   const linkS = process.env.REACT_APP_LINK

  useEffect(()=>{


  },[])

  // const cekData = async(e)=>{
  //   try{
  //     const res = await axios.post(linkS,sudahOrder.token)
  //     const messageRes = res.data

  //   }
  //   ed
  // }



  return (
        sudahOrder.link === "" ?
    (<div>Silahkan Order Terlebih Dahulu
      {/* {alert("Belum ada linknya")} */}
      {/* {console.log(sudahOrder)} */}
    </div>)
    :
    (<div className={kelas.checkoutContainerPage}>
      <DanaPayment/>
      {/* {alert("sudah ada linknya")} */}
      {/* <CheckoutComponent sudahOrder={sudahOrder} konfirmasiPage={konfirmasiPage}/> */}
      HELLO ANDA SUDAH MASUK
      {console.log("SUDAH ORDER",sudahOrder)}
    </div>)
  )
}
