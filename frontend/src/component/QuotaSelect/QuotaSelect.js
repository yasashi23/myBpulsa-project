import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function QuotaSelect({key,pulsak,harga,pilihan,kartu}) {
    const [data,setData] = useState([])
    const kotak = {
        border:"1px solid red",
        width:"150px",
        "box-sizing":"border-box",
        padding:"15px 0px",
        cursor:"pointer"
    }

  return (
    <div>

            <div key={key} style={kotak} onClick={() => pilihan({...kartu,pulsa:pulsak,harga:`Rp${harga.toLocaleString('id-ID')}`,modals:true})}>
                    <h3>{pulsak}</h3>
                    <p>{`Rp${harga.toLocaleString('id-ID')}`}</p>
            </div>


    </div>
  )
}
