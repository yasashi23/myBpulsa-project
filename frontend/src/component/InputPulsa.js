import React, {useState,useEffect} from 'react'

export default function InputPulsa({prefix,noKaSet}) {
  const [cariNo,setCariNo] = useState("")
  const [iniKartunya,setIniKartunya] = useState("")

  const [nyoba,setNyoba] = useState("")

  useEffect(() => {
    let foundCard = null;
    let kk = cariNo.slice(0,4)

    prefix.forEach(card => {
      if (card.prefixnya.includes(cariNo) || (card.prefixnya.includes(kk) && cariNo.length > 3)) {
        foundCard = card.kartu;
        setIniKartunya(foundCard)
        noKaSet({kartu:`${foundCard}`,nomor:`${cariNo}`,pulsa:"kosong",harga:"kosong",modals:false})
      }else if(cariNo.length < 4){
        noKaSet({kartu:"kosong",nomor:`${cariNo}`,pulsa:"kosong",harga:"kosong",modals:false})
        setIniKartunya('')
      }
    });



  }, [cariNo, prefix,noKaSet]);

  return (
    <div>
        <input type="number" name="" id="" placeholder='08XXXXXXXXXX' onChange={(e)=>setCariNo(e.target.value)}/> 
        <br />
        <h1>{iniKartunya}</h1>
    </div>
  )
}
