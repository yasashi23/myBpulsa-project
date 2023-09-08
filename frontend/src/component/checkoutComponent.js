import React from 'react'
import kelas from '../scssFile/checkoutScssFile/checkoutComp.module.scss'
import Cookies from 'js-cookie'
import PilihOperator from './OperatorSquare'

export default function CheckoutComponent({konfirmasiPage}) {
  const dataPengguna = JSON.parse(Cookies.get('detailPengguna'))
  const nomorTanpaSpasi = dataPengguna.nomor.replaceAll(" ","-")

  return (  
    <div className={kelas.compCheckout}>
        {console.log("INI ADALAH CHECKOUT", dataPengguna)}
        <div>
          <h3>biPulsa Checkout Page</h3>
        </div>

        <div>
          <h2>Paket Pulsa Yang Dipilih:</h2>
          <div>
            <div>
              <PilihOperator operator={dataPengguna.kartu} pulsa={dataPengguna.pulsa} harga={dataPengguna.harga}/>
            </div>
            <div>
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
          <div>
            <h4>Hi, {dataPengguna.nama}</h4>
            <p>Silahkan lakukan pembayaran dengan total {dataPengguna.harga} dan langsung konfirmasi via WA agar pulsa segera dikirimkan
                ke nomor {nomorTanpaSpasi}.
            </p>
          </div>
        </div>

        <div>
          <div>Konfirmasi WA disini</div>
          <div>
            <button>Konfirmasi</button>
          </div>
        </div>

    </div>
  )
}
