import React,{useState} from 'react'
import AccountCircle from "@mui/icons-material/AccountCircle";
import { TextField,Box, CircularProgress} from '@mui/material';
import kelas from '../scssFile/otpModal.module.scss'


export default function InputName({data,setData,btnDisable}) {
const [cekNama, setCekNama] = useState({bool:false, word:''})
const [namanya,setNamanya] = useState('')

const handleKeyPress = (e) => {
  if(e.key == 'Enter'){
    e.preventDefault()
    
  }
}

const handleNama = (e) =>{
    let value = e.target.value

    if(value.length < 3) {
        setCekNama({bool:true,word:'Lengkapi Namanya'})
        // btnDisable(true)
    }else{
        setCekNama({bool:false,word:''})
        // btnDisable(false)
        setData({...data,nama:value})
    }
    setNamanya(value)
}

  return (
        <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent:"center"}}>
            <AccountCircle className={kelas.nameLogoOtpModule} sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
            id="input-with-sx"
            label="Masukkan Nama mu"
            variant="standard"
            size="200px"
            onKeyDown={handleKeyPress}
            onChange={handleNama}
            required
            value={namanya}
            error={cekNama.bool}
            helperText={cekNama.word}
            />
        </Box>
  )
}


