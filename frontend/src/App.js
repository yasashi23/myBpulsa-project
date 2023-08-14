import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';




function App() {
  const [cookieValue, setCookieValue] = useState('');

  useEffect(() => {
    // Membaca nilai cookie saat komponen dimuat
    const storedCookieValue = Cookies.get('myCookie');
    if (storedCookieValue) {
      setCookieValue(storedCookieValue);
    }
  }, []);
  const handleSetCookie = () => {
    // Mengatur cookie dengan nilai baru
    Cookies.set('myCookie', cookieValue, { expires: 7 }); // Cookie berlaku selama 7 hari
  };



  const handlePost = async () =>{
    Cookies.set('myCookie', cookieValue, { expires: 7 });
    try{
      const headers = {
        'Content-Type': 'application/json',
        'X-CSRFToken':cookieValue
      }
      const res = await axios.post(
        'http://localhost:8000/test/',
        {judul:'udin'},{headers}
      )
      console.log(res.data)
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div>
      <h1>Contoh Pengaturan Cookie dengan React</h1>
      <input
        type="text"
        value={cookieValue}
        onChange={(e) => setCookieValue(e.target.value)}
      />
      <button onClick={handlePost}>Set Cookie</button>
      {/* <p>Nilai Cookie: {cookieValue}</p> */}
    </div>
  );
}

export default App;
