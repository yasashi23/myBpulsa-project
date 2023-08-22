import React,{useState,forwardRef, useEffect} from 'react'
import { PatternFormat } from 'react-number-format';
import { TextField,Box, CircularProgress} from '@mui/material';
import axios from 'axios'
import WaSvg from './WaSvg';

function InputNoWa({setNoWa,noWa}) {



const [cekNoWa, setCekNoWa] = useState({bool:false,word:''})

const InputPropsWa = {
  format:"#### #### ####",
  allowEmptyFormatting:false,
  mask:""
}

let duaAngkaAwal = /^0[8]/


const handleChangeNoWa = (e) => {
const value = e.target.value

const newVal = '62'+value.slice(1,value.length)
if((!duaAngkaAwal.test(value) && value.length-2 >= 2)) {

    setCekNoWa({bool:true,word:'Gunakan "08" untuk awal nomor'})}
    
    else {
        setCekNoWa({bool:false,word:''})
        // setKonfirmasi({...konfirmasi,nomorWa:value,...newN})
        setNoWa({phone_number:newVal})
    }

}

  return (
    
    <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent:'center' }}>
        <WaSvg sx={{ color: "action.active", mr: 1, my: 0.5 }}/>
        <TextField
        id="input-with-sx"
        label="Masukkan No Wa mu"
        variant="standard"
        placeholder='08XX XXXX XXXX'
        InputProps={{
        inputComponent: InputNomor,
        inputProps:InputPropsWa}}
        // onKeyDown={clickBayarDariInput}
        onChange={handleChangeNoWa}
        error={cekNoWa.bool}
        helperText={cekNoWa.word}
        />
    </Box>

  )
}


const InputNomor = forwardRef((props, ref) => {
  const { component: Component, ...other } = props;
  return <PatternFormat {...other} />;
});

export {
    InputNoWa,

}