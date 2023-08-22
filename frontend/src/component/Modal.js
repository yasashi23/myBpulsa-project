import React,{useState,forwardRef} from 'react'
import { PatternFormat } from 'react-number-format';
import { TextField,Box, CircularProgress} from '@mui/material';
import { Navigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import WaSvg from './WaSvg';
import TungguLoading from './TungguLoading';



export default function Modal ({data, setData, konfirmasi, setKonfirmasi, kelar,loading, sukses}) {
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
        setData({...newN,...konfirmasi,jam:time,nomorWa:`62${noWa}`})}
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
              
              {
                onOffModals?
                (
                    <div>
                        
                    </div>
                ):
                (

                )
              }

              
            </div>
        </div>


    </div>
  )
}



const InputNomor = forwardRef((props, ref) => {
  const { component: Component, ...other } = props;
  return <PatternFormat {...other} />;
});




