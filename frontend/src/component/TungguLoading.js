import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function TungguLoading({query, nomorWa,otpBerhasil}) {
  const [loading, setLoading] = React.useState(false);
  const numberWa = "0"+ nomorWa.nomor.slice(2)
  const timerRef = React.useRef();
  // const query = false

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ height: 40 }}>
        {! query ? (
          <Typography>{otpBerhasil? (<p>
            Ok, Kode OTP sudah<br/>Dikirmkan ke {numberWa}
          </p>) : (<p>Kode OTP gagal<br/>Dikirimkan ke {numberWa}</p>)}</Typography>
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