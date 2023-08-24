import React from 'react'
import Tri from '../logoOperator/tri.webp'
import Tsel from '../logoOperator/tsel.webp'
import Indosat from '../logoOperator/indosat.webp'
import Smartfren from '../logoOperator/smartfren.webp'
import Axis from '../logoOperator/axis.webp'
import Xl from '../logoOperator/xl.webp'



export default function OperatorsLogo({operator, style, imgStyle}) {

 const {height} = imgStyle
 const heightForSmartfren = Number(height.replace("px",""))
 console.log(heightForSmartfren)
 const newImgStyle = {...imgStyle}
 const smartfrenStyle = {...imgStyle,height:`${heightForSmartfren*0.5}px`}
 const containerDiv = {...style}

 if(operator === 'telkomsel') return <TselOp style={containerDiv} imgStyle={newImgStyle}/>
 else if(operator === 'indosat') return <IndosatOp style={containerDiv} imgStyle={newImgStyle}/>
 else if(operator === 'xl') return <XlOp style={containerDiv} imgStyle={newImgStyle}/>
 else if(operator === 'axis') return <AxisOp style={containerDiv} imgStyle={newImgStyle}/>
 else if (operator === 'smartfren') return <SmartfrenOp style={containerDiv} imgStyle={smartfrenStyle}/>
 else if (operator === 'tri') return <TriOp style={containerDiv} imgStyle={newImgStyle}/>
 else return <div></div>

}







function TriOp({style, imgStyle}) {
  return (
    <div style={style}>
        <img src={Tri} style={imgStyle} alt="" />
    </div>
  )
}

function TselOp({style, imgStyle}) {
  return (
    <div style={style}>
        <img src={Tsel} style={imgStyle} alt="" />
    </div>
  )
}

function IndosatOp({style, imgStyle}) {
  return (
    <div style={style}>
        <img src={Indosat} style={imgStyle} alt="" />
    </div>
  )
}


function XlOp({style, imgStyle}) {
  return (
    <div style={style}>
        <img src={Xl} style={imgStyle} alt="" />
    </div>
  )
}
function SmartfrenOp({style, imgStyle}) {
  return (
    <div style={style}>
        <img src={Smartfren} style={imgStyle} alt="" />
    </div>
  )
}


function AxisOp({style, imgStyle}) {
  return (
    <div style={style}>
        <img src={Axis} style={imgStyle} alt="" />
    </div>
  )
}



