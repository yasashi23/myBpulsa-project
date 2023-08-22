import React,{useState,forwardRef} from 'react'
import { PatternFormat } from 'react-number-format';
import { LanjutBtn, KembaliBtn, KirimBtn, KembaliInfo } from './ButtonModal';
import { InputNoWa } from './InputNoWa';
// import AccountCircle from "@mui/icons-material/AccountCircle";
import { Navigate } from "react-router-dom";
import TungguLoading from './TungguLoading';



export default function Modal ({data, setData, konfirmasi, setKonfirmasi, kelar,loading, sukses}) {
    const [sudah,setSudah] = useState(false)
    const {modals,...newN} = data

    const [nomorWa,setNoWa] = useState({phone_number:''})



    const numAwal = /^[1-9]/

    // const clickBayar = () =>{
    //     if(konfirmasi.nomorWa.length -2 < 10 ||  numAwal.test(konfirmasi.nomorWa)) {
    //         setCekNoWa({...cekNoWa,bool:true})
    //     }
    //     else {
    //     const date = new Date()
    //     const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`

    //     const noWa = (konfirmasi.nomorWa).slice(1,(konfirmasi.nomorWa).length)
    //     setData({...newN,...konfirmasi,jam:time,nomorWa:`62${noWa}`})}
    // }




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

    const centerWa ={
      display:'flex',
      justifyContent:'center',
      flexDirection:'column'

    }


//   const clickBayarDariInput = (e) => {
//   if(e.key == 'Enter' && cekNoWa.bool == true){
//     e.preventDefault()
//   }else{
//       clickBayar()
    
//   }
// }

let duaAngkaAwal = /^0[8]/

// const handleChangeNoWa = (e) => {
// const value = e.target.value

// if((!duaAngkaAwal.test(value) && value.length-2 >= 2)
// ) {setCekNoWa({bool:true,word:'Gunakan "08" untuk awal nomor'})
// }
// else {setCekNoWa({bool:false,word:''})
//         setKonfirmasi({...konfirmasi,nomorWa:value,...newN})}

// }

const textLeft = {
  textAlign:'left'
}


  return (
    <div style={fullCont}>

        {console.log(nomorWa)}
        <div class="modal-overlay" style={containerStyle}>
            <div class="modal">
              
              {
                onOffModals?

                sudah ?

                (
                  <div className="input-no-wa">
                    <h3>Verifikasi Kode OTP via Whatsapp</h3>
                    <br />
                    <InputNoWa setNoWa={setNoWa} noWa = {nomorWa}/>
                    <br />
                  </div>
                )
                :
                (
                    <div className='Info-nomor-pulsa'>
                      <h3>Apakah sudah benar?</h3>
                      <br />
                      <h4>Nomor Anda</h4>
                      <h2><strong><u>{data.nomor}</u></strong></h2>
                      <br />
                      <h4>Paket yang anda pilih</h4>
                      <table>
                        <tr>
                          <td>Pulsa: </td>
                          <td><strong>{data.pulsa}</strong></td>
                        </tr>
                        <tr>
                        <td>Harga: </td>
                          <td><strong>{data.harga}</strong></td>
                        </tr>
                      </table>                        
                    </div>
                )
                :
                (
                  <InputNoWa/>
                )
              }
              <br />

              {sudah ?

              (<div className="containerBtn" style={containerBtn}>
              <KirimBtn
                txt={"Kirim OTP"}
                setSudah={setSudah}
                setNoWa={setNoWa}
                noWa={nomorWa}
              />
              <KembaliInfo 
                txt={"Kembali"}
                data={data}
                setData={setData}
                setSudah={setSudah}
              />
              </div>)
              :
              (<div className="containerBtn" style={containerBtn}>
              <LanjutBtn 
                txt={"Sudah"}
                setSudah={setSudah}
              />
              <KembaliBtn 
                txt={"Belum"}
                data={data}
                setData={setData}
              />
              </div>)

              }
              
            </div>
        </div>

    </div>
  )
}








