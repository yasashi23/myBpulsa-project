import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PilihOperator from '../OperatorSquare'


export default function QuotaSelect({key,pulsak,harga,pilihan,kartu,cekNomor,setOpen}) {
  
    
    const kotak = {
        "box-sizing":"border-box",
        padding:"15px 0px",
        cursor:"pointer"
    }
    const handleClick = () =>{
      pilihan({...kartu,pulsa:pulsak,harga:`Rp${harga.toLocaleString('id-ID')}`,modals:true})

      if(kartu.nomor.length -2 < 11) {
        setOpen(true)
      }
      else {
        setOpen(false)
      }


    }

  return (
    <div>
            <div key={key} style={kotak} onClick={handleClick}>
                    <PilihOperator operator={kartu.kartu} pulsa={pulsak} harga={`Rp${harga.toLocaleString('id-ID')}`}/>
            </div>

    </div>
  )
}
