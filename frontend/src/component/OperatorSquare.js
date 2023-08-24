import React,{useState} from 'react'
import OperatorsLogo from './OperatorsLogo'
import UjungTsel from '../asset/tselAsset.png'
import UjungAxis from '../asset/axisAsset.png'
import UjungSmartfren from '../asset/smartfrenAsset.png'
import UjungXl from '../asset/xlAsset.png'

export default function OperatorSquare() {
  return (
    <TselSquare/>
  )
}


function TselSquare() {

    const displayFlex ={
        display:'flex',
        flexDirection:'column',

    }

    const styleKotak = {
        width:'200px',
        height:'80px',
        border:'1px solid red'
    }
    const ujungStyle = {
        height:'30px'
    }



    return(
        <div style={styleKotak}>
            <div className="ujungLogo" style={ujungLogo}>
                <AssetUjungTsel styleImg={ujungStyle}/>
            </div>
            <div className="pulsanya" style={pulsanya}>
                <h2>5000</h2>
            </div>
            <div style={harganya}>
                <p>Rp.4.000</p>
            </div>
        </div>
    )
}


function AssetUjungTsel({styleImg}) {

    return(
        <div>
            <img src={UjungTsel} style={styleImg}/>
        </div>
    )
}

function AssetUjungAxis() {
    return(
        <div>
            <img src={UjungAxis}/>
        </div>
    )
}
function AssetUjungXl() {
    return(
        <div>
            <img src={UjungXl}/>
        </div>
    )
}
function AssetUjungSmartfren() {
    return(
        <div>
            <img src={UjungSmartfren}/>
        </div>
    )
}