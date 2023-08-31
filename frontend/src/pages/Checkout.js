import React from 'react'
import DanaPayment from '../component/danaPayment'
import CheckoutComponent from '../component/checkoutComponent'
import kelas from '../scssFile/checkoutScssFile/checkoutPage.module.scss'

export default function Checkout() {
  return (
    <div className={kelas.checkoutContainerPage}>
      <DanaPayment/>
      <CheckoutComponent/>
    </div>
  )
}
