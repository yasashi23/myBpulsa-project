import React,{useState} from 'react'
import OperatorsLogo from './OperatorsLogo'
import UjungTsel from '../asset/tselAsset.webp'
import UjungAxis from '../asset/axisAsset.webp'
import UjungSmartfren from '../asset/smartfrenAsset.webp'
import UjungXl from '../asset/xlAsset.webp'
import TriSvg from './Tri'


export default function OperatorSquare() {

  
  return (
    <div>
        <Square 
            style={{background: 'linear-gradient(180deg, #002BBA 0%, #00C89E 120%)'}} 
            element={<AssetUjungXl styleImg={{height:'46px'}}/>}
            />

        <br/>

        <Square
            style={{background: '#753C94'}}
            element={<AssetUjungAxis styleImg={{height:'46px'}}/>}
        />

        <br/>

        <Square
            style={{background: 'linear-gradient(191deg, #D40010 0%, #FF490D 100%)'}}
            element={<AssetUjungTsel styleImg={{height:'46px'}}/>}
        />

        <br/>

        <Square
            style={{background: 'linear-gradient(180deg, #ED1D61 0%, #F44F85 100%)'}}
            element={<AssetUjungSmartfren styleImg={{height:'20px'}}/>}
        />

        <br/>
        <AssetUjungTri sx={{opacity:'.4'}} widthAndHeigthSvg={'60px'}/>

    </div>
  )
}



function AssetUjungTri({sx, widthAndHeigthSvg}){
    const styleKotak = {
        width: '180px',
        height: '106px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color:'white',
        background: 'linear-gradient(153deg, #F2522D 0%, #EF267E 100%)',
        alignItems:'center'
    }

    const kartuContainerStyle ={
        position:'absolute',
        zIndex:'1'
    }

    const sxStyle = {
        width:widthAndHeigthSvg,
        height:widthAndHeigthSvg,
        ...sx
    }

    //styleWOrd
    const styleWord = {
        zIndex:'9999'
    }
    const h2Pulsa = {
        fontSize: '38px',
    }
    const pHargaPulsa = {
        fontSize: '14px'
    }


    return(
        <div style={styleKotak}>
            <div style={kartuContainerStyle}>
                <TriSvg sx={sxStyle}/>
            </div>
            <div style={styleWord}>
                <h2 style={h2Pulsa}>100.000</h2>
                <p style={pHargaPulsa}>Rp.100.000</p>
            </div>
        </div>
    )

}





function Square({style,element}) {
    //containernya
    const styleKotak = {
        width: '180px',
        height: '106px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color:'white',...style
    }

    // container Contentnya

    const styleCont = {
        display: 'flex',
        position: 'absolute',
        top: '0px'
    }

    //style untuk pulsanya
    const pulsaStyle ={
        position:'relative'
    }
    const h2Pulsa = {
        fontSize: '38px',
        width: '44%'
    }

    // style Harga Pulsanya
    const hargaPulsa = {
        position: 'absolute',
        marginLeft: '10px',
        bottom: '10px'
    }
    const pHargaPulsa = {
        fontSize: '14px'
    }



    return(
        <div style={styleKotak}>
            <div className="ujungStle" style={styleCont}>
                {(element)}
            </div>
            <div className="pulsanya"  style={pulsaStyle}>
                <h2 style={h2Pulsa}>5000</h2>
            </div>
            <div className='hargaPulsanya' style={hargaPulsa}>
                <p style={pHargaPulsa}>Rp.4.000</p>
            </div>
        </div>
    )
}












function AssetUjungTsel({styleImg, styleCont}) {

    return(
        <div style={styleCont}>
            <img src={UjungTsel} style={styleImg}/>
        </div>
    )
}

function AssetUjungAxis({styleImg, styleCont}) {

    return(
        <div style={styleCont}>
            <img src={UjungAxis} style={styleImg}/>
        </div>
    )
}

function AssetUjungXl({styleImg, styleCont}) {

    return(
        <div style={styleCont}>
            <img src={UjungXl} style={styleImg}/>
        </div>
    )
}




function AssetUjungSmartfren({styleImg, styleCont}) {

    return(
        <div style={styleCont}>
            <img src={UjungSmartfren} style={styleImg}/>
        </div>
    )
}