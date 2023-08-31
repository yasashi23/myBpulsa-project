import React,{useState,forwardRef} from 'react'
import { LanjutBtn, KembaliBtn, KirimBtn, KembaliInfo, VerifyOtp } from './ButtonModal';
import { InputNoWa } from './InputNoWa';
import { Snackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import TungguLoading from './TungguLoading';
import Otpinput from './Otpinput';
import InputName from './InputName';
import PilihOperator from './OperatorSquare';
import kelas from '../scssFile/modal.module.scss'
import { useTimer } from 'use-timer';



export default function Modal ({data, setData, setKonfirmasi, cekNomor,open,setOpen}) {
  const { time, start, pause, reset, status } = useTimer({
  initialTime: 10,
  endTime:0,
  timerType: 'DECREMENTAL',
    onTimeOver: () => {
    alert('Time is over');
  },
});
  
    const [sudah,setSudah] = useState(false)
    const {modals,...newN} = data

    const [isLoading, setIsLoading] = useState(false);

    const [nomorWa,setNoWa] = useState({phone_number:''})

    const [btnDisable,setBtnDisable] = useState(true)

    const [load,setLoad] = useState(false)

    const onOffModals = data.modals

    const [otpBerhasilDikirim,setOtpBerhasilDikirim] = useState(false)

    const [otp,setOtp] = useState('')

    const [verifyOtp, setVerifyOtp] = useState({...nomorWa,otp:''})

    const [panjangOtp, setPanjangOtp] = useState(true)

    const [sekaliSubmitAja, setSekaliSubmitAja] = useState({sendOtp:0,verifyOtp:0})

    const [pesanOtp,setPesanOtp ] = useState('sedang diisi')

    const[btnDsableName,setBtnDisableName] = useState(true)

    const[warningOtp,setWarningOtp] = useState('mengisi')
    




    

    const flex = {
        display:(onOffModals?"flex":"none"),
    }





  return (
    <div className={kelas.modalContainer} style={flex}>

      {console.log({btnDisable,btnDsableName})}

        <div className={kelas.layerOverlay} style={flex}>
            <div class="modal">
              
              {
                onOffModals?

                sudah ? //start [onOffModals True]

               isLoading? //isLoading ? //start [sudah True] //still [onOffModals True]
               //otpBerhasilDikirim},nomorWa

                (
                  <div>

                  <TungguLoading query={load} otpBerhasil={otpBerhasilDikirim} nomorWa={nomorWa}/>
                  </div>
                ) // start [isLoading true] //still [sudah True] //still [onOffModals True]

                :

                otpBerhasilDikirim?   //start [isloading false] //still [sudah True] //still [onOffModals True]

                (
                  <div>
                    <Otpinput 
                      otp={otp} 
                      setOtp={setOtp}
                      nomorWa={nomorWa}
                      setVerifyOtp={setVerifyOtp}
                      panjangOtp={setPanjangOtp}
                      pesanOtp={pesanOtp}
                      setPesanOtp={setPesanOtp}
                      warningOtp={warningOtp}
                      setWarningOtp={setWarningOtp}
                      />
                  </div>
                ) //start [otp true] //still [isloading false] //still [sudah True] //still [onOffModals True]
                
                :

                //BUAT JIKA OTP BERHASIL DI VERIFIKASINYA DISINI

                (<div className={kelas.inputNoWa}>
                    <h2>Verifikasi OTP dulu ya!!</h2>
                    <p>Kode OTP akan di kirimkan via Whatsapp</p>
                    <br />
                    <InputName 
                      setData={setData}
                      data={data}
                      btnDisable={setBtnDisable}
                      />  
                      <br />
                    <InputNoWa 
                      setNoWa={setNoWa} 
                      noWa ={nomorWa}
                      btnDisable={setBtnDisable}  
                      btnDisableName={btnDsableName}
                      />
                    <br />
                  </div>) //Last [otp False] //Last [isloading false] //still [sudah True] //still [onOffModals True]
                :
                (   <div className={kelas.infoNoPulsa}> 
                      <h3>{open? 'Perbaiki Nomor Anda!!':'Di cek lagi ya!!'}</h3>
                      <br />
                      {console.log({data})}
                      <h4>Nomor Anda</h4>
                      <h2><strong><u>{data.nomor}</u></strong></h2>
                      <br />
                      <h4 style={{marginBottom:'10px'}}>Paket yang anda pilih</h4>
                      <PilihOperator operator={data.kartu} pulsa={data.pulsa} harga={data.harga}/>
                      <br />
                      <p>{open? 'Klik belum dan Perbaiki Nomor anda':'Sudah benar semua?'}</p>
                    </div>
                ) //Last [sudah false] //still [onOffModals True]
                :
                (
                  <div></div>
                )//Last[onOffModals False]
              }
              
              

              {
                
                sudah ?

                isLoading ? //sudah true
              (<div></div>) //loading true //sudah true
              :

              otpBerhasilDikirim?
                (<div className={`${kelas.containerButton} ${kelas.buttonVerify}`} style={flex}>

                  <p className={`${kelas.warningTextOtp} ${warningOtp === 'success'? kelas.Berhasil: warningOtp === 'mengisi'?  kelas.mengisi : kelas.Gagal}`}>{warningOtp === 'success'? 'OTP sesuai': warningOtp === 'mengisi'?  '' : 'OTP Tidak Sesuai'}</p>
                  <VerifyOtp 
                    txt={'Verifikasi Kode'}
                    verifyOtp={verifyOtp}
                    otp={otp}
                    panjangOtp={panjangOtp}
                    sekaliSubmitAja={sekaliSubmitAja}
                    setSekaliSubmitAja={setSekaliSubmitAja}
                    dataBerhasilVerify={data}
                    nomorWa={nomorWa}
                    setKonfirmasi={setKonfirmasi}
                    setWarningOtp={setWarningOtp}
                  />
                  <p>Minta lagi {time} {console.log(status)}</p>

                </div>)
              :

              (<div className={kelas.containerButtonOtp} style={flex}>
              <KirimBtn
                txt={"Minta Kode"}
                setSudah={setSudah}
                setNoWa={setNoWa}
                noWa={nomorWa}
                loading={setIsLoading}
                btnDisable={btnDisable}
                btnDisableName={btnDsableName}
                setLoad={setLoad}
                setOtpBerhasil={setOtpBerhasilDikirim}
                sekaliSubmitAja={sekaliSubmitAja}
                setSekaliSubmitAja={setSekaliSubmitAja}
                start={start}
              />
              <KembaliInfo 
                txt={"Kembali"}
                data={data}
                setData={setData}
                setSudah={setSudah}
              />
              </div>) // loading false //sudah true

              :
              (<div className={kelas.containerButton} style={flex}>
              <LanjutBtn 
                txt={"Sudah"}
                setSudah={setSudah}
                cekNomor={data.nomor}
                open={open}
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

