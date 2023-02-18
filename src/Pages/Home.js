import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import EastIcon from '@mui/icons-material/East';


const Home = () => {
   return (
      <Stack direction='column' justifyContent='center' alignItems='center' height='80vh'>
         <Typography variant='h3' sx={{
            fontWeight: 600
         }}>
            Take a Surveys.
            <BsCheckCircleFill style={{ color: "#0d6efd", marginLeft: '1rem', marginBottom: "-10px" }} />
         </Typography>
         <Typography variant='h5' color='GrayText' fontWeight='600' mt='1rem' mb='7rem'>
            It will take 5 mounties!
         </Typography>
         <Button variant="contained" endIcon={<EastIcon />} >
            Start
         </Button>
      </Stack>
   );
};

export default Home;