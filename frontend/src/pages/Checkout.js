import React from 'react'
import DanaPayment from '../component/danaPayment'
import CheckoutComponent from '../component/checkoutComponent'
import kelas from '../scssFile/checkoutScssFile/checkoutPage.module.scss'

export default function Checkout({sudahOrder, konfirmasiPage}) {
  return (
        sudahOrder === undefined ?
    (<div>Silahkan Order Terlebih Dahulu</div>)
    :
    (<div className={kelas.checkoutContainerPage}>
      <DanaPayment/>
      <CheckoutComponent sudahOrder={sudahOrder} konfirmasiPage={konfirmasiPage}/>
    </div>)
  )
}
