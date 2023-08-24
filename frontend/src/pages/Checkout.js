import React from 'react'
import {Link} from 'react-router-dom'

export default function Checkout({konfirmasiPage,data}) {

  return (
    <div>
    {console.log(`KONFIRMASI PAGE --> ${konfirmasiPage.aman}`)}
        {
                    !konfirmasiPage.aman ? 
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
