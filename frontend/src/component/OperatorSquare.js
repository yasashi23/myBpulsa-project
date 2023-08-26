import React,{useState} from 'react'
import OperatorsLogo from './OperatorsLogo'
import UjungTsel from '../asset/tselAsset.webp'
import UjungAxis from '../asset/axisAsset.webp'
import UjungSmartfren from '../asset/smartfrenAsset.webp'
import UjungXl from '../asset/xlAsset.webp'
import TriSvg from './svgComponent/Tri'
import IndosatSvg from './svgComponent/IndosatSvg'
import BelumLunas from './svgComponent/belumLunasIcon'


export default function PilihOperator({operator,pulsa,harga,belumLunas}){

    if(operator === 'xl') {
       return (<Square 
            style={{
                    background: 'linear-gradient(180deg, #002BBA 0%, #00C89E 120%)',
                    textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}} 
                    element={<AssetUjungXl styleImg={{height:'46px'}}/>}
                    pulsa={pulsa}
                    harga={harga}

                    />)
    }
    else if (operator === 'axis') {
        return (<Square
            style={{
                background: '#753C94',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}}
            element={<AssetUjungAxis styleImg={{height:'46px'}}/>}
            pulsa={pulsa}
            harga={harga}

            />)
    }
    else if (operator === 'telkomsel') {
        return (
                    <Square
            style={{
                background: 'linear-gradient(191deg, #D40010 0%, #FF490D 100%)',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}}
            element={<AssetUjungTsel styleImg={{height:'46px'}}/>}
            pulsa={pulsa}
            harga={harga}
            belumLunas={belumLunas}
            />
        )
    }

    else if (operator === 'smartfren') {
        return (<Square
            style={{
                background: 'linear-gradient(180deg, #ED1D61 0%, #F44F85 100%)',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}}
            element={<AssetUjungSmartfren styleImg={{height:'20px'}}/>}
            pulsa={pulsa}
            harga={harga}

            />)
    }

    else if (operator === 'tri') {
        return (<AssetUjungTri 
            sx={{opacity:'.4'}} 
            widthAndHeigthSvg={'60px'}
            styleN={{textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}}
            pulsa={pulsa}
            harga={harga}


            />)
    }

    else if(operator === 'indosat') {
        return (<AssetUjungIndosat 
            widthAndHeigthSvg={'40px'}
            styleN={{textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}}
            pulsa={pulsa}
            harga={harga}
            
            />)
    }

    else {
        return <div></div>
    }

}



function OperatorSquare() {

  
  return (
    <div>
        <Square 
            style={{
                background: 'linear-gradient(180deg, #002BBA 0%, #00C89E 120%)',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}} 
            element={<AssetUjungXl styleImg={{height:'46px'}}/>}
            />

        <br/>

        <Square
            style={{
                background: '#753C94',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}}
            element={<AssetUjungAxis styleImg={{height:'46px'}}/>}
        />

        <br/>

        <Square
            style={{
                background: 'linear-gradient(191deg, #D40010 0%, #FF490D 100%)',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}}
            element={<AssetUjungTsel styleImg={{height:'46px'}}/>}/>

        <br/>

        <Square
            style={{
                background: 'linear-gradient(180deg, #ED1D61 0%, #F44F85 100%)',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}}
            element={<AssetUjungSmartfren styleImg={{height:'20px'}}/>}/>

        <br/>
        <AssetUjungTri 
            sx={{opacity:'.4'}} 
            widthAndHeigthSvg={'60px'}
            styleN={{textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}}/>


        <br/>

        <AssetUjungIndosat 
            widthAndHeigthSvg={'40px'}
            styleN={{textShadow: '0px 4px 6px rgba(0, 0, 0, 0.46)'}}/>

        <br/>

    </div>
  )
}

function AssetUjungIndosat({sx, widthAndHeigthSvg,styleN, pulsa,harga}){
    const styleKotak = {
        width: '180px',
        height: '106px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color:'white',
        background: 'linear-gradient(153deg, #F2522D 0%, #EF267E 100%)',
        ...styleN
    }

    const kartuContainerStyle ={
        position:'absolute',
        zIndex:'1',
        top:'-2px',
        left:'6px'
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
                <IndosatSvg sx={sxStyle}/>
            </div>
            <div style={styleWord}>
                <h2 style={h2Pulsa}>{pulsa}</h2>
                <p style={pHargaPulsa}>{harga}</p>
            </div>
        </div>
    )

}





function AssetUjungTri({sx, widthAndHeigthSvg,styleN,pulsa,harga}){
    const styleKotak = {
        width: '180px',
        height: '106px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color:'white',
        background: 'linear-gradient(153deg, #F2522D 0%, #EF267E 100%)',
        alignItems:'center',
        ...styleN
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
                <h2 style={h2Pulsa}>{pulsa}</h2>
                <p style={pHargaPulsa}>{harga}</p>
            </div>
        </div>
    )

}





function Square({style,element,pulsa,harga,belumLunas}) {
    //containernya
    const styleKotak = {
        width: '190px',
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
        fontSize: '36px',
        width: '48%'
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
    const blmLunas = {
        position: 'absolute',
        top: 0,
        right: 0,
    }
    const smallTxt ={
        position:'absolute',
        fontSize:'12px',
        left: '70%',
        bottom:'8%',
        transform: 'translate(-50%, -50%)'
    }


    return(
        <div style={styleKotak}>
            <div className="ujungStle" style={styleCont}>
                {(element)}
            </div>
            <div className="pulsanya"  style={pulsaStyle}>
                <h2 style={h2Pulsa}>{pulsa}</h2>
            </div>
            <div className='hargaPulsanya' style={hargaPulsa}>
                <p style={pHargaPulsa}>{harga}</p>
            </div>
            <div style={blmLunas}>
                {(belumLunas)}
            </div>
            <div style={smallTxt}>
                <small>www.bipulsa.com</small>
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