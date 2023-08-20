import React, {useState,useEffect,forwardRef, useImperativeHandle} from 'react'
import { PatternFormat } from 'react-number-format';
import { TextField } from '@mui/material';




export default function InputPulsa({prefix,noKaSet}) {

  const [cariNo,setCariNo] = useState("")
  const [iniKartunya,setIniKartunya] = useState("")

  

  useEffect(() => {
    let foundCard = null;
    let kk = cariNo.slice(0,4)

    prefix.forEach(card => {
      if (card.prefixnya.includes(cariNo) || (card.prefixnya.includes(kk) && cariNo.length > 3)) {
        foundCard = card.kartu;
        setIniKartunya(foundCard)
        noKaSet({kartu:`${foundCard}`,nomor:`${cariNo}`,pulsa:"kosong",harga:"kosong",modals:false})
      }else if(cariNo.length < 4){
        noKaSet({kartu:"kosong",nomor:`${cariNo}`,pulsa:"kosong",harga:"kosong",modals:false})
        setIniKartunya('')
      }
    });



  }, [cariNo, prefix,noKaSet]);
  const [cekNomor,setCekNomor] = useState(`${iniKartunya == "Universal"}`)

  const inputProps = {
  format:"#### #### ####",
  allowEmptyFormatting:false,
  mask:" ",
}

  return (
    <div>
        <TextField
        
              placeholder="08XXXXX"
          multiline
    InputProps={{
    inputComponent: MyInputComponent,
    inputProps:inputProps,}}
    id="filled-basic"
    label="Masukkan Nomor"
    variant="filled"
    onChange={(e)=>setCariNo(e.target.value)}
    value={cariNo}
    required

/>
        <h1>{iniKartunya}{cekNomor}</h1>
    </div>
  )
}



const MyInputComponent = forwardRef((props, ref) => {
  const { component: Component, ...other } = props;


  // `Component` will be your `SomeThirdPartyComponent` from below
  return <PatternFormat {...other} />;
});

// usage


