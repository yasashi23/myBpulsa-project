import React,{useState} from 'react'
import kelas from '../scssFile/checkoutScssFile/dana.module.scss'
import DanaSvg from './svgComponent/DanaSvg'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Countdown from "react-countdown";

export default function DanaPayment() {
        const [copyPasteRek, setCopyPasteRek] = useState({value:'085212454896',copied:false})
        const [copyPasteKet, setCopyPasteKet] = useState({value:'biPulsa085212454896',copied:false})
        const [MinuteAndSec,setMinuteAndSec] = useState({min:'',Sec:''})
  return (
    <div className={kelas.danaPayContainer}>
        <PerlineOne title={'Top up Via:'} svg={<DanaSvg classnya={kelas.danaSvg}/>}/>
        <PerlineWithCopy title={'Top up ke:'} txt={'085212454896'} copyValue={copyPasteRek} setCopy={setCopyPasteRek} titCopy={'copy rek dana'}/>
        <Perline title={'Atas Nama:'} txt={'Yasashi Briliant Putra'}/>
        <PerlineWithCopy title={'Dengan Keterangan:'} txt={'biPulsa81314427019'} copyValue={copyPasteKet} setCopy={setCopyPasteKet} titCopy={'copy keterangan'}/>
        <br/>
        <PerlineTimer title={'Waktu Pembayaran Tersisa:'}/>
    </div>
  )
}


function PerlineOne({title, svg}){
    return(
        <div>
            <h2>{title}</h2>
            <div>{svg}</div>
            <div className={kelas.garisDana}></div>
        </div>
    )
}

function PerlineWithCopy({title, txt, setCopy,copyValue, titCopy}){

      const copyStyle = { 
                    cursor:'pointer',
                    width:'22px'
                    }
    return(
        <div>
            <h2>{title}</h2>
            <p className={kelas.withCopy}>
                {txt}
                <CopyToClipboard text={copyValue.value}
                    onCopy={() => setCopy({...copyValue,copied:true})}>
                    <Tooltip title={titCopy}>
                    <ContentCopyIcon className={kelas.contentCopyLogo} style={copyStyle}/>
                    </Tooltip> 
                </CopyToClipboard>
                        
            </p>
            <div className={kelas.garisDana}></div>
        </div>
    )
}

function Perline({title, txt}){
    return(
        <div>
            <h2>{title}</h2>
            <p>{txt}</p>
            <div className={kelas.garisDana}></div>
        </div>
    )
}

function PerlineTimer({title, state}){

    return(
        <div className={kelas.timerCountdown}>
            <h2>{title}</h2>
            <div>
<<<<<<< HEAD
                {/* <Countdown date={(Date.now() + 3.6e6)} renderer={renderer}/> */}
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <HitungJam/>
=======
                {/* <Countdown date={(Date.now() + 3.6e6)} renderer={renderer}/> */}
>>>>>>> ea0847a (update 6 sep 22:48)
=======
                {/* <Countdown date={(Date.now() + 3.6e6)} renderer={renderer}/> */}
>>>>>>> percobaan
>>>>>>> 95a0bde972b9bb5487a6835adac84daa44cb64d9
            </div>
        </div>
    )
}

function HitungJam(){
    const [tigaJam, setTigaJam] = useState({})
    
    
    const jamnya = new Date()
    let[jam,menit,detik]=[jamnya.getHours(),jamnya.getMinutes(),jamnya.getSeconds()]

        const sls = (((jam*3600)+(menit*60)+(detik*1))+3600)
        const Jam = (sls - (sls%3600))/3600
        const Menit = ((sls%3600)-((sls%3600)%60))/60
        const Detik = (sls%3600)%60
        


    return(
        <div>
            {`${Jam}:${Menit}:${Detik}`}
        </div>
    )
}