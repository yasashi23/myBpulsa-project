import React, {useState,useEffect,forwardRef, useRef} from 'react'
import { PatternFormat } from 'react-number-format';
import { TextField } from '@mui/material';
import validator from 'validator'



export default function InputPulsa({prefix,noKaSet}) {

  const [cariNo,setCariNo] = useState("")
  const [iniKartunya,setIniKartunya] = useState("")
  const [cekNomor,setCekNomor] = useState({bool:false, word:""})

  const inputRef = useRef(null)
  
    
  useEffect(() => {
    inputRef.current.focus()
    let foundCard = null;
    let kk = cariNo.slice(0,4)
    let duaAngkaAwal = /^0[8]/
    prefix.forEach(card => {
      if (card.prefixnya.includes(cariNo) || (card.prefixnya.includes(kk) && (cariNo.length - 2) > 3)) {
        foundCard = card.kartu;

        if(foundCard == 'Universal') setCekNomor({bool:true,word:'nomor anda tidak di ketahui'})
        setIniKartunya(foundCard)

        noKaSet({kartu:`${foundCard}`,nomor:`${cariNo}`,pulsa:"kosong",harga:"kosong",modals:false})
      }
      else if((cariNo.length - 2) < 4){

        if(duaAngkaAwal.test(cariNo) && cariNo.length-2 >= 2 || cariNo.length -2 <= 1) setCekNomor({bool:false,word:''})
        else setCekNomor({bool:true,word:"Gunakan '08' untuk awal nomor"})

        
        noKaSet({kartu:"kosong",nomor:`${cariNo}`,pulsa:"kosong",harga:"kosong",modals:false})
        setIniKartunya('')
      }
    });

  }, [cariNo, prefix,noKaSet]);


  const inputProps = {
  format:"#### #### ####",
  allowEmptyFormatting:false,
  mask:""
}
  const handleKeyPress = (e) => {
  if(e.key == 'Enter'){
    e.preventDefault()
    
  }
}

const handleChange = (e) => {
setCariNo(e.target.value)
}


  return (
    <div>
        <TextField
          ref={inputRef}
          error={cekNomor.bool}
          helperText={cekNomor.word}
          placeholder="08XX XXXX XXXX"
          multiline
          InputProps={{
          inputComponent: MyInputComponent,
          inputProps:inputProps}}
          id="filled-basic"
          label="Masukkan Nomor"
          variant="filled"
          onChange={handleChange}
          value={cariNo}
          onKeyPress={(e) => handleKeyPress(e)}
          required/>

        <h1>{iniKartunya}{`${cariNo.startsWith('08')}`}</h1>
    </div>
  )
}



const MyInputComponent = forwardRef((props, ref) => {
  const { component: Component, ...other } = props;
  return <PatternFormat {...other} />;
});



