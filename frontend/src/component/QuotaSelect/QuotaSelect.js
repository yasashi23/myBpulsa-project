import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function QuotaSelect({key,pulsak,harga,pilihan}) {
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

            <div style={kotak} onClick={() => pilihan({pulsa:pulsak,harga})}>
                    <h3>{pulsak}</h3>
                    <p>{harga}</p>
            </div>


    </div>
  )
}
