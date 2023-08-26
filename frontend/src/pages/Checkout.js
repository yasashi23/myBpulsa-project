import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import PilihOperator from '../component/OperatorSquare';
import BelumLunas from '../component/svgComponent/belumLunasIcon';


export default function Checkout({konfirmasiPage}) {

  const {data,link,aman} = konfirmasiPage


  const [copyPaste,setCopyPaste] = useState({value:'085212454896', copied:false})
  const [copyPasteNomor,setCopyPasteNomor] = useState({value:`bipulsa${data.nomor}`, copied:false})

  const copyStyle = { 
    cursor:'pointer'
  }
  const tambahanStyle = {
    tambahanStyleContainerAll:{
      width:'380px',
      height:'212px'
    },
    tambahanPulsanya:{
      fontSize:'90px '
    },
    tambahanHargaPulsa:{
      fontSize:'22px'
    },
    tambahanPembungkusTextLinkWeb:{
      fontSize:'18px'
    },
    tambahanPembungkusHargaPulsa:{
      bottom:'10%',
      left:'7%'
    },
    tambahanPembungkusSegitigaBlmLunas:{
      display:'none'
    }
  }

  const keterangan = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    marginTop:"5px"
}

  return (
    <div>
    {console.log(`KONFIRMASI PAGE --> ${aman}`)}
    {console.log(data,link)}
        {
                    !true ? 
  (<div><p> lakukan pemilihan paket terlebih dahulu</p> <Link to="/">Disini</Link></div>): 


  (<center>
        <h2>Hi {data.nama}, Silahkan Lakukan topup Dana ke:</h2>
        <h1>
            <u>B8*******6</u> 
        <CopyToClipboard text={copyPaste.value}
          onCopy={() => setCopyPaste({...copyPaste,copied:true})}>
            <Tooltip title="Copy Nomor Dana">
              <ContentCopyIcon style={copyStyle}/>
            </Tooltip> 
        </CopyToClipboard>

        </h1>
        <p>A.N Yasashi Briliant Putra</p>
        <br/>
        <PilihOperator  
          operator={'telkomsel'} 
          pulsa={'5000'} harga={'Rp.4000'} 
          belumLunas={<BelumLunas/>}
          style={{...tambahanStyle}}
          />
          <br/>
          <h3>Dengan Jumlah</h3>
          <p>Rp.6000</p>
          <br/>
          <h2 style={{fontSize:'40px'}}>Isi keterangannya dengan</h2>
          <p style={{...keterangan,fontSize:'30px'}}>
            <u>bipulsa{`${data.nomor}`}</u>
            <CopyToClipboard text={copyPasteNomor.value}
              onCopy={() => setCopyPaste({...copyPasteNomor,copied:true})}>
                <Tooltip title="Copy Nomor Dana">
                  <ContentCopyIcon style={copyStyle}/>
                </Tooltip> 
            </CopyToClipboard>
          </p>

        {/* <p>beli paket lagi <Link to="/">Disini</Link> </p> */}
  </center>)




        }
    </div>
)
}
