import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from 'react';
import QuotaSelect from './QuotaSelect';

export default function CarouselQuota({ pulsa, kartu }) {
  const [dataPulsanya, setDataPulsanya] = useState([]);
  const [foundIndex, setFoundIndex] = useState(-1);

  // ada ga?
  const [cekDulu, setCekDulu] =useState(true)

  useEffect(() => {
    setDataPulsanya(pulsa); // Mengupdate dataPulsanya saat pulsa berubah
    const ind = pulsa.findIndex(item => item.kartu.toLowerCase() === kartu.toLowerCase());
    setFoundIndex(ind);
  }, [pulsa, kartu]);

  const responsive = {
    // ... pengaturan responsif lainnya
  };

  const coba = {
    border : "solid 1px"
  }

  const groupDiv = () =>{
    const group = []
    if(dataPulsanya[foundIndex] === undefined){
      console.log("di If")
      return <div></div>
    }
    else{
      console.log('di else')
      const iniIsipulsa = (dataPulsanya[foundIndex].isiPulsa)
      // console.log(iniIsipulsa)
      for(let i = 0; i < iniIsipulsa.length; i += 3) {
        group.push(
          <div key={i} style={coba}>
            {(iniIsipulsa).slice(i,i+3).map((item,index) => (
              <QuotaSelect key={index} pulsak={item.pulsa} harga={item.hargaBaru}/>
              
            ))}

          </div>
        )
      }
      console.log(group)
    }
    return group

  }


  const crs = {
    "cursor": "pointer"
  };

  return (
    <div>
            {/* {console.log(kartu, dataPulsanya[foundIndex] === undefined)} */}
      <Carousel
        responsive={responsive}
        style={crs}
        swipeable={true}
        itemClass={'listSlide'}
        showDots={true}
        sliderClass={"ulStyle"}
      > 
        udin
      {/* {groupDiv().map((item,index)=>(
        <div>udin</div>
      ))} */}
      {groupDiv()}

      </Carousel> 
    </div>
  );
}
