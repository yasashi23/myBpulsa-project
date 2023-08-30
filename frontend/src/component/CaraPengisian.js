import React from 'react'
import Cara1 from '../asset/cara1.png'
import Cara2 from '../asset/cara2.png'
import Cara3 from '../asset/cara3.png'
import Cara4 from '../asset/cara4.png'
import CaraMobile2 from '../asset/cara2Mobile.png'
import CaraMobile3 from '../asset/cara3Mobile.png'
import CaraMobile4 from '../asset/cara4Mobile.png'
import { Padding } from '@mui/icons-material'
import kelasnya from '../scssFile/caraPengisian.module.scss'

export default function CaraPengisian() {
  const widthWindowForPhone = window.innerWidth < 500
  return (
    <div>
        <h3>Cara Pengisiannya:</h3>
        <br/>
        <div className={`${kelasnya.containerCard}`}>
            <CaraPengisianCard foto={Cara1} nomor={'1'} text={'Masukkan nomor hp mu yang ingin di isi pulsanya'}/>
            <CaraPengisianCard foto={widthWindowForPhone? CaraMobile2 : Cara2} nomor={'2'} text={'Pilihan pulsa akan muncul'}/>
            <CaraPengisianCard foto={widthWindowForPhone? CaraMobile3 : Cara3} nomor={'3'} text={'Lalu klik pulsa yang anda butuhkan'}/>
            <CaraPengisianCard foto={widthWindowForPhone? CaraMobile4 : Cara4} nomor={'4'} text={'Akan muncul seperti ini, dan lanjutkan prosesnya'}/>
        </div>
    </div>
  )
}

function CaraPengisianCard({foto,nomor,text}) {

  return (
    <div className={kelasnya.pengisianCardContainer}>
        <div className={`${kelasnya.imgContainer}`}>
            <img src={foto} alt=""/>
        </div>
        <br />
        <div className={`${kelasnya.containerTablePengisian}`}>
            <table>
                <tr>
                    <td>{nomor}</td>
                    <td>{text}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}
