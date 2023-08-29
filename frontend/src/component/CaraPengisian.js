import React from 'react'
import Cara1 from '../asset/cara1.png'
import Cara2 from '../asset/cara2.png'
import Cara3 from '../asset/cara3.png'
import Cara4 from '../asset/cara4.png'
import { Padding } from '@mui/icons-material'
import kelasnya from '../scssFile/caraPengisian.module.scss'

export default function CaraPengisian() {
  return (
    <div>
        <h3>Cara Pengisiannya:</h3>
        <br/>
        <div className={`${kelasnya.containerCard}`}>

            <CaraPengisianCard foto={Cara1} nomor={'1'} text={'Masukkan nomor hp mu yang ingin di isi pulsanya'}/>
            <CaraPengisianCard foto={Cara2} nomor={'2'} text={'Pilihan paket pulsa akan muncul'}/>
            <CaraPengisianCard foto={Cara3} nomor={'3'} text={'Lalu klik mana yang anda butuhkan'}/>
            <CaraPengisianCard foto={Cara4} nomor={'4'} text={'Dan akan muncul seperti ini, dan lanjutkan prosesnya'}/>
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
