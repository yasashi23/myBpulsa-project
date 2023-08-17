import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import QuotaSelect from './QuotaSelect'

export default function CarouselQuota() {
  const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2
  }

  
};
const crs={
  "cursor":"pointer"
}
  return (
    <div>
      <Carousel 
          responsive={responsive} 
          style={crs}
          swipeable={true}
          itemClass={'listSlide'}
          showDots={true}
          sliderClass={"ulStyle"}

          >
        <QuotaSelect pulsa="5000"/>
        <QuotaSelect pulsa="10000"/>
        <QuotaSelect pulsa="15000"/>

        <QuotaSelect pulsa="20000"/>
        <QuotaSelect pulsa="25000"/>
        <QuotaSelect pulsa="35000"/>

        <QuotaSelect pulsa="45000"/>
      </Carousel>
    </div>
  )
}
