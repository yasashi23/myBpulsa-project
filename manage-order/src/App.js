
import './App.css';
import React,{useEffect,useState} from 'react'
import {io} from 'socket.io-client'

function App() {

  const defaultIsi = {nama:'',kartu:'',nomor:'',nomorWa:'',pulsa:'',harga:'',status:''}
  const [coba,setCoba] = useState([defaultIsi])


  

  const url = 'http://192.168.100.7:8000/'
  var socket = io(url,{
    path:'/sockets'
  })
  const [isConnect,setIsConnect] = useState(socket.connected)


  useEffect(() => {

    socket.on("connect",(data)=> {
      setIsConnect(socket.connected)
    })

    socket.on("testing",(data)=>{
      // setCoba(data.data)
      console.log(data)
      // window.location.reload()
    })

    socket.on("disconnect",(data)=>{
      setIsConnect(socket.connected)
    })
        
      },[])
      
      
      return (
    <center className="App">
      <h1>INI halaman manage {`${isConnect}`}</h1>  

        <table>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Kartu</th>
            <th>Nomor</th>
            <th>No. WA</th>
            <th>Pulsa</th>
            <th>Harga</th>
            <th>Status</th>
          </tr>

        {coba.map((dat,ind)=>(
          <tr key={ind}>
            <td>{ind}</td>
            <td>{dat.nama}</td>
            <td>{dat.kartu}</td>
            <td>{dat.nomor}</td>
            <td>{dat.nomorWa}</td>
            <td>{dat.pulsa}</td>
            <td>{dat.harga}</td>
            <td>{dat.status}</td>
          </tr>
        ))}


        </table>

    </center>
  );
}

export default App;
