import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PilihOperator from '../OperatorSquare'
import { Snackbar,Alert } from '@mui/material'

export default function QuotaSelect({key,pulsak,harga,pilihan,kartu,cekNomor}) {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    
    const kotak = {
        "box-sizing":"border-box",
        padding:"15px 0px",
        cursor:"pointer"
    }
    const handleClick = () =>{
      pilihan({...kartu,pulsa:pulsak,harga:`Rp${harga.toLocaleString('id-ID')}`,modals:true})

      if(cekNomor.length-2 < 10){
        setOpen(true)
      }else setOpen(false)

    }

  return (
    <div>
            <div key={key} style={kotak} onClick={handleClick}>
                    <PilihOperator operator={kartu.kartu} pulsa={pulsak} harga={`Rp${harga.toLocaleString('id-ID')}`}/>
            </div>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Lengkapi Nomor terlebih dahulu
                  </Alert>
                </Snackbar>
    </div>
  )
}
