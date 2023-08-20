import React,{useState} from 'react'

export default function ({data, setData, konfirmasi, setKonfirmasi, kelar,setKelar}) {
    const [sudah,setSudah] = useState(false)
    const {modals,...newN} = data


    
    // const [konfirmasi,setKonfirmasi] = useState({nama:"kosong",nomorWa:"08"})
    const clickBayar = () =>{
        const date = new Date()
        const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
        const noWa = (konfirmasi.nomorWa).slice(1,(konfirmasi.nomorWa).length)
        setKonfirmasi({...konfirmasi,jam:time,nomorWa:`62${noWa}`})

        alert('sudah di klik')
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

  return (
    <div style={fullCont}>

        
        <div class="modal-overlay" style={containerStyle}>
            <div class="modal">
            
            
           {!kelar ?
            ( <div class="modal-content">

                <div class="modal-header">
                <h5>{sudah ?  "Konfirmasi Pembelian(Via Whatsapp)" :"Sudah Benar?"}</h5>
                </div>

                {!sudah ?
                (<div>
                <h3>Nomor:</h3>
                <p>{data.nomor}</p>
                </div>)
                :
               (<table>
                    <tr>
                        <td>Nama</td>
                        <td><input type="text" placeholder='masukkan nama anda' onChange={(e) => setKonfirmasi({...konfirmasi,nama:e.target.value,...newN})}/></td>
                    </tr>
                </table>) 
                }

                <br />

                <div class="modal-body">
                <h5>{!sudah ? "Dengan Pilihan": "Masukkan No Whatsapp"}</h5>
                
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
                :(<table>
                    <tr>
                        <td>No. Wa</td>
                        <td><input type="number" placeholder='087XXXXX' onChange={(e) => setKonfirmasi({...konfirmasi,nomorWa:e.target.value,...newN})}/></td>
                    </tr>
                </table>) 

                }
                </div>

                <br />

                {/* {console.log("ini-diMOdals",data)} */}

                {
                
                <div style={containerBtn}>
                {sudah ? (<button type='submit' style={btnYesStyle} onClick={clickBayar}>Bayar</button>)
                :(<div style={btnYesStyle} onClick={()=> setSudah(true)}>sudah</div>)
                }
                
                {sudah ? (<div style={btnNoStyle} onClick={() => {setData({...data,modals:true}); setSudah(false)}}>kembali</div>):
                (<div style={btnNoStyle} onClick={() => setData({...data,modals:false})}>belum</div>)}
                
                </div>
                }



            </div>)
            :
            ( <div class="modal-content">

                <div class="modal-header">
                <h5>Silhkan Cek Whatsapp</h5>
                </div>

                <div>
                <h3>{konfirmasi.nama}</h3>

                </div>


                <br />

                <div class="modal-body">
                <h5>Terima kasih</h5>
                </div>


            </div>)
            
            
            }


            </div>
        </div>


    </div>
  )
}
