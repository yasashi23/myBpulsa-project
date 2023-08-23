
import React,{useState,forwardRef} from 'react'
import { LanjutBtn, KembaliBtn, KirimBtn, KembaliInfo } from './ButtonModal';
import { InputNoWa } from './InputNoWa';
// import AccountCircle from "@mui/icons-material/AccountCircle";
import { Navigate } from "react-router-dom";
import TungguLoading from './TungguLoading';



export default function Modal ({data, setData, konfirmasi, setKonfirmasi, kelar, sukses}) {
    const [sudah,setSudah] = useState(false)
    const {modals,...newN} = data

    const [isLoading, setIsLoading] = useState(false);

    const [nomorWa,setNoWa] = useState({phone_number:''})

    const [btnDisable,setBtnDisable] = useState(false)

    const onOffModals = data.modals

    const aturanLoading = (s) => {
      setIsLoading(s)
    }

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




  return (
    <div style={fullCont}>

        {console.log(nomorWa)}
        <div class="modal-overlay" style={containerStyle}>
            <div class="modal">
              
              {
                onOffModals?

                sudah ? //onOffModals True

                isLoading ? //sudah True //onOffModals True

                (
                  <TungguLoading query={'sukses'}/>
                ) //isLoading true //sudah True //onOffModals True

                :

                (<div className="input-no-wa">
                    <h3>Verifikasi Kode OTP via Whatsapp</h3>
                    <br />
                    <InputNoWa 
                      setNoWa={setNoWa} 
                      noWa ={nomorWa}
                      btnDisable={setBtnDisable}  
                      />
                    <br />
                  </div>) //isLoading false //sudah True //onOffModals True
                :
                (   <div className='Info-nomor-pulsa'> 
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
                ) //sudah False //onOffModals True
                :
                (
                  <div></div>
                )//onOffModals False
              }
              <br />

              {
                
                sudah ?

                isLoading ? //sudah true
              (<div></div>) //loading true //sudah true
              :
              (<div className="containerBtn" style={containerBtn}>
              <KirimBtn
                txt={"Kirim OTP"}
                setSudah={setSudah}
                setNoWa={setNoWa}
                noWa={nomorWa}
                loading={setIsLoading}
                btnDisable={btnDisable}
              />
              <KembaliInfo 
                txt={"Kembali"}
                data={data}
                setData={setData}
                setSudah={setSudah}
              />
              </div>) // loading false //sudah true

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
              </div>)//sudah false

              }
              
            </div>
        </div>

    </div>
  )
}








