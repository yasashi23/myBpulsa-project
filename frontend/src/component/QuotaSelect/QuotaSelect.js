import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function QuotaSelect({pulsa,harga}) {
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

    useEffect(()=>{
        axios.get('http://localhost:8000/data/')
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err))
    },[])


  return (
    <div>
        <div className="sliderQuota" style={ktk}> 
            <div style={kotak}>
                    <h3>{pulsa}</h3>
                    <p>Rp.5.000</p>
            </div>
            <div style={kotakCenter}>
                    <h3>{pulsa}</h3>
                    <p>Rp.5.000</p>
            </div>
            <div style={kotak}>
                    <h3>{pulsa}</h3>
                    <p>Rp.5.000</p>
            </div>
        </div>

    </div>
  )
}
