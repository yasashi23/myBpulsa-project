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

  const copyStyle = { 
    cursor:'pointer'
  }

  return (
    <div>
    {console.log(`KONFIRMASI PAGE --> ${aman}`)}
    {console.log(data,link)}
        {
                    !true ? 
  (<div><p> lakukan pemilihan paket terlebih dahulu</p> <Link to="/">Disini</Link></div>): 


  (<div>
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
          belumLunas={<BelumLunas/>}>
          <h1>Haloo</h1>
        </PilihOperator>

        {/* <p>beli paket lagi <Link to="/">Disini</Link> </p> */}
  </div>)




        }
    </div>
)
}
