import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function TungguLoading({query, nomorWa,otpBerhasil}) {
  const [loading, setLoading] = React.useState(false);
  // const [query, setQuery] = React.useState(false);
  const timerRef = React.useRef();
  // const query = false

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );


  // const handleClickQuery = (e) => {
  //   if (timerRef.current) {
  //     clearTimeout(timerRef.current);
  //   }
  //   setQuery(e)
  //   // if (query !== 'idle') {
  //   //   setQuery('idle');
  //   //   return;
  //   // }


    
    
  //   if(query === false) timerRef.current = window.setTimeout(() => {
  //     setQuery(false);
  //   }, 2000);
    
  //   else setQuery(true);

  // };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ height: 40 }}>
        {! query ? (
          <Typography>{otpBerhasil? `Ok, Kode OTP sudah Dikirmkan ke ${nomorWa.phone_number}` : `Kode OTP gagal Dikirmkan ke ${nomorWa.phone_number}`}</Typography>
        ) : (
          <Fade
            in={query}
            style={{
              transitionDelay: query ? '400ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        )}
      </Box>
      {/* <Button onClick={() => handleClickQuery(!query)} sx={{ m: 2 }}>
        {query ? 'Reset' : 'Simulate a load'}
      </Button> */}
      {/* {handleClickQuery(true)} */}
    </Box>
  );
}