import React,{useState} from 'react'
import AccountCircle from "@mui/icons-material/AccountCircle";
import { TextField,Box, CircularProgress} from '@mui/material';


export default function InputName({data,setData,btnDisable}) {
const [cekNama, setCekNama] = useState({bool:false, word:''})

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
}

  return (
        <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent:"center"}}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
            id="input-with-sx"
            label="Masukkan Nama mu"
            variant="standard"
            onKeyDown={handleKeyPress}
            onChange={handleNama}
            required
            error={cekNama.bool}
            helperText={cekNama.word}
            />
        </Box>
  )
}


