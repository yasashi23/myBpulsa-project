import React,{useState,forwardRef} from 'react'
import { PatternFormat } from 'react-number-format';
import { TextField,Box, Alert} from '@mui/material';
import { Navigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import WaSvg from './WaSvg';
import validator from 'validator'



export default function Modal ({data, setData, konfirmasi, setKonfirmasi, kelar,loading}) {
    const [sudah,setSudah] = useState(false)
    const {modals,...newN} = data

    const [cekNoWa, setCekNoWa] = useState({bool:false,word:''})
    const numAwal = /^[1-9]/
    const clickBayar = () =>{
        if(konfirmasi.nomorWa.length -2 < 10 ||  numAwal.test(konfirmasi.nomorWa)) {
            setCekNoWa({...cekNoWa,bool:true})
        }
        else {
        const date = new Date()
        const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
        const noWa = (konfirmasi.nomorWa).slice(1,(konfirmasi.nomorWa).length)
        setKonfirmasi({...konfirmasi,jam:time,nomorWa:`62${noWa}`})}
    }

    const onOffModals = data.modals

    const flex = {
        display:(onOffModals?"flex":"none"),
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }
    const fullCont = {
        width:"100%",
        height:"100vh",
        position:"fixed",
        background: "rgba(164, 164, 164, 0.47)",
        top:0,
        left:0,
        zIndex:"999",
        ...flex
    }
    const containerStyle = {
        display:"block",
        padding:"45px 10px",
        boxSizing:"border-box",
        width:"400px",
        backgroundColor:"white",
        ...flex,
        top:"-20%",
        position:"relative"
    }
    const containerBtn = {
        ...flex,
        flexDirection:"row",
        gap:"8px"
    }

    const btnStyle = {
        padding:"6px",
        color:"white",
        backgroundColor:"transparent",
        border:"none",
        textAlign: "center",
        textDecoration: "none",
        color:"white",
        cursor:"pointer"
    }
    const btnYesStyle = {
        ...btnStyle,
        backgroundColor:"#4CAF50"
    }
    const btnNoStyle ={
        ...btnStyle,
        backgroundColor:"#f44336"
    }

  const handleKeyPress = (e) => {
  if(e.key == 'Enter'){
    e.preventDefault()
    
  }
}
  const clickBayarDariInput = (e) => {
  if(e.key == 'Enter' && cekNoWa.bool == true){
    // clickBayar()
    e.preventDefault()
  }else{
      clickBayar()
    
  }
}
let duaAngkaAwal = /^0[8]/
const handleChangeNoWa = (e) => {
const value = e.target.value

if((!duaAngkaAwal.test(value) && value.length-2 >= 2)
) {setCekNoWa({bool:true,word:'Gunakan "08" untuk awal nomor'})
}
else {setCekNoWa({bool:false,word:''})
        setKonfirmasi({...konfirmasi,nomorWa:value,...newN})}

}



const InputPropsWa = {
  format:"#### #### ####",
  allowEmptyFormatting:false,
  mask:""
}



  return (
    <div style={fullCont}>

        
        <div class="modal-overlay" style={containerStyle}>
            <div class="modal">
            
            
           {loading ?
           
            ( <div class="modal-content">

                <div class="modal-header">
                <h5>Tunggu Sebentar ya boss</h5>
                </div>
            </div>)
            : !kelar ?
            ( <div class="modal-content">

                <div class="modal-header">
                <h5>{sudah ?  "Konfirmasi Pembelian(Via Whatsapp)" :"Sudah Benar?"}</h5>
                <br />
                </div>

                {!sudah ?
                (<div>
                <h3>Nomor:</h3>
                <p>{data.nomor}</p>
                </div>)
                :
               ( <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                    <TextField
                    id="input-with-sx"
                    label="Masukkan Nama mu"
                    variant="standard"
                    onKeyDown={handleKeyPress}
                    onChange={(e) => setKonfirmasi({...konfirmasi,nama:e.target.value,...newN})}
                    required
                    />
                    </Box>) 

                }

                <br />

                <div class="modal-body">
                <h5>{!sudah ? "Dengan Pilihan": ""}</h5>
                
                {!sudah ?
                 (<table>
                    <tr>
                        <td>Pulsa:</td>
                        <td>{data.pulsa}</td>
                    </tr>
                    <tr>
                        <td>harga:</td>
                        <td>{data.harga}</td>
                    </tr>
                </table>)
                :(               
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    {/* <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}
                    <WaSvg sx={{ color: "action.active", mr: 1, my: 0.5 }}/>
                    <TextField
                    id="input-with-sx"
                    label="Masukkan No Wa mu"
                    variant="standard"
                    placeholder='08XX XXXX XXXX'
                    InputProps={{
                    inputComponent: InputNomor,
                    inputProps:InputPropsWa}}
                    onKeyDown={clickBayarDariInput}
                    onChange={handleChangeNoWa}
                    error={cekNoWa.bool}
                    helperText={cekNoWa.word}
                    />
           </Box>

                    ) 

                }
                </div>

                <br />

                {
                
                <div style={containerBtn}>
                {sudah ? (<button type='submit' style={btnYesStyle} disabled={cekNoWa.bool} onClick={clickBayar}>Bayar</button>)
                :(<div style={btnYesStyle} onClick={()=> setSudah(true)}>sudah</div>)
                }
                
                {sudah ? (<div style={btnNoStyle} onClick={() => {setData({...data,modals:true}); setSudah(false)}}>kembali</div>):
                (<div style={btnNoStyle} onClick={() => setData({...data,modals:false})}>belum</div>)}
                
                </div>
                }



            </div>)
            :
            <Navigate to="/checkout"/>
            }

            {console.log(`kelar = ${!kelar}, loading = ${loading}`)}
            </div>
        </div>

            {console.log(`LOOK AT THIS ${'08888888'.startsWith('08')}`)}
    </div>
  )
}


const InputNama = forwardRef((props, ref) => {
  const { component: Component, ...other } = props;
  return <PatternFormat {...other} />;
});

const InputNomor = forwardRef((props, ref) => {
  const { component: Component, ...other } = props;
  return <PatternFormat {...other} />;
});




