import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function QuotaSelect({key,pulsak,harga}) {
    const [data,setData] = useState([])
    const kotak = {
        border:"1px solid red",
        width:"150px",
        display:"flex",
        "flex-direction":"column",
        "box-sizing":"border-box",
        padding:"15px 0px"
    }
    const kotakCenter = {
        margin:"20px 0px",
        ...kotak
    }
    const ktk = {
        width:'200px'
    }
  return (
    <div>

            <div style={kotak}>
                    <h3>{pulsak}</h3>
                    <p>{harga}</p>
            </div>


    </div>
  )
}
