import React, { useState } from 'react'
import kelas from '../scssFile/checkoutScssFile/checkoutComp.module.scss'
import Cookies from 'js-cookie'
import PilihOperator from './OperatorSquare'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'

export default function CheckoutComponent({konfirmasiPage}) {
  const dataPengguna = JSON.parse(Cookies.get('detailPengguna'))
  const nomorTanpaSpasi = dataPengguna.nomor.replaceAll(" ","-")
  const tambahanPulsanya = {
    width:'100%',
    textAlign:'center'
  }

  const [sudahKlikKonfirmasi,setSudahKlikKonfirmasi] = useState('belum')

  const f = 250
  const widthRumus = f/1.79
    const tambahanStyleContainerAll = {
      width:`${f}px`,
      height: `${widthRumus}px`
    }

    const handleClick = () =>{
      // window.open("https://api.whatsapp.com/send?phone=6285280167388&text=Halo%2C%20saya%20ingin%20konfirmasi%20pembayaran",'_blank')

      Cookies.remove('batasPembayaran')
      Cookies.remove('detailPengguna')
      Cookies.remove('linkPembayaran')

    }



  return (  
    <div className={kelas.compCheckout}>
        {console.log("INI ADALAH CHECKOUT", dataPengguna)}
        <div className={kelas.title}>
          <h3>biPulsa <span>Checkout Page</span></h3>
        </div>
        <div className={kelas.line}></div>

        <div className={kelas.keterangan}>
          <h2>Paket Pulsa Yang Dipilih:</h2>
          <div className={kelas.operator}>
            <div>
              <PilihOperator operator={dataPengguna.kartu} pulsa={dataPengguna.pulsa} harga={dataPengguna.harga} style={{tambahanPulsanya,tambahanStyleContainerAll}}/>
            </div>
            <div className={kelas.keteranganPulsa}>
              <h4>Keterangan</h4>
              <table>
                <tr>
                  <td>Pulsa</td>
                  <td>:</td>
                  <td>{dataPengguna.pulsa}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>:</td>
                  <td>{dataPengguna.harga}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className={kelas.pemberitahuan}>
            <h4>Hi, {dataPengguna.nama}</h4>
            <p>Silahkan lakukan pembayaran dengan total <u>{dataPengguna.harga}</u> dan mengirimkan bukti via WA agar pulsa segera dikirimkan
                ke nomor <u>{nomorTanpaSpasi}</u>.
            </p>
          </div>
        </div>
        <div className={kelas.line}></div>
        <div className={kelas.konfirmasiWa}>
          <div>Konfirmasi WA disini</div>
          <div>
            <button onClick={handleClick}>
             <Link to={'/'}>konfirmasi</Link>
            </button>
          </div>
        </div>

    </div>
  )
}
