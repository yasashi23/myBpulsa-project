import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from 'react';
import QuotaSelect from './QuotaSelect';
import "react-multi-carousel/lib/styles.css";

export default function CarouselQuota({ pulsa, kartu, pilih }) {
  const [dataPulsanya, setDataPulsanya] = useState([]);
  const [foundIndex, setFoundIndex] = useState(-1);

  

  useEffect(() => {
    setDataPulsanya(pulsa); 
    const ind = pulsa.findIndex(item => item.kartu.toLowerCase() === kartu.toLowerCase());
    setFoundIndex(ind);
  }, [pulsa, kartu]);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

  const coba = {
    // border : "solid 1px",
    display:"flex",
    "flexDirection":"column",
    gap:'30px'
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
              <QuotaSelect key={index} pulsak={item.pulsa} harga={item.hargaBaru} pilihan={pilih} />
              
            ))}

          </div>
        )
      }
      console.log(group)
      
      return group
    }

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
        showDots={true}
      > 
        
      {/* {groupDiv().map((item,index)=>(
        <div>udin</div>
      ))} */}
      {groupDiv()}

      </Carousel> 
    </div>
  );
}