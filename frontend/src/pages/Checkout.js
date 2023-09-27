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
    (<div>Silahkan Order Terlebih Dahulu</div>)
    :
    (<div className={kelas.checkoutContainerPage}>
      <DanaPayment/>
      <CheckoutComponent sudahOrder={sudahOrder} konfirmasiPage={konfirmasiPage}/>
    </div>)
  )
}
