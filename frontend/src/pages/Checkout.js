import React from 'react'
import {Link} from 'react-router-dom'

export default function Checkout({konfirmasiPage}) {

  const {data,link,aman} = konfirmasiPage

  return (
    <div>
    {console.log(`KONFIRMASI PAGE --> ${aman}`)}
    {console.log(data,link)}
        {
                    !aman ? 
  (<div><p> lakukan pemilihan paket terlebih dahulu</p> <Link to="/">Disini</Link></div>): 
  (<div>
        <h2>Hi {data.nama}, Terima kasih atas pembeliannya</h2>
        <p>Pembalian pada jam : {data.jam} </p>
        <p>beli paket lagi <Link to="/">Disini</Link> </p>
  </div>)
        }
    </div>
)
}
