import React from 'react'
import Cara1 from '../asset/cara1.png'
import Cara2 from '../asset/cara2.png'
import Cara3 from '../asset/cara3.png'
import Cara4 from '../asset/cara4.png'
import { Padding } from '@mui/icons-material'

export default function CaraPengisian() {
  return (
    <div>
        <h3>Cara Pengisiannya:</h3>
        <br/>
        <div className="containerCard" style={{display:'flex', gap:'8px'}}>

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
    <div style={{width:'200px', display:'flex', flexDirection:'column', border:'1px solid', padding:'12px',borderRadius:'6px'}}>
        <div className="imgContainer">
            <img src={foto} alt="" style={{width:'100%',borderRadius:'6px'}}/>
        </div>
        <br />
        <div>
            <table>
                <tr style={{
                            display:'flex', alignItems:'flex-start',
                            textAlign: 'justify',
                            textJustify: 'inter-word'
                            }}>
                    <td style={{padding:'4px', borderRadius:'1000px',background:'#D9D9D9',marginRight:'10px'}}>{nomor}</td>
                    <td>{text}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}
