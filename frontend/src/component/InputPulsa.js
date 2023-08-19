import React, {useState,useEffect} from 'react'

export default function InputPulsa({prefix, dataKartu}) {
  const [cariNo,setCariNo] = useState("")
  const [iniKartunya,setIniKartunya] = useState("")

  const [nyoba,setNyoba] = useState("")

  useEffect(() => {
    let foundCard = null;
    let kk = cariNo.slice(0,4)

    prefix.forEach(card => {
      if (card.prefixnya.includes(cariNo) || (card.prefixnya.includes(kk) && cariNo.length > 3)) {
        foundCard = card.kartu;
        dataKartu(`${foundCard}`)
        setIniKartunya(foundCard);
      }else if(cariNo.length < 4){
        dataKartu("kosong")
        setIniKartunya('')
      }
    });



  }, [cariNo, prefix]);

  return (
    <div>
        <input type="number" name="" id="" placeholder='08XXXXXXXXXX' onChange={(e)=>setCariNo(e.target.value)}/> 
        <br />
        <h1>{iniKartunya}</h1>
    </div>
  )
}
