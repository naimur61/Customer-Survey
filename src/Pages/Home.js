import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const Home = () => {
   return (
      <Stack direction='column' justifyContent='center' alignItems='center' height='50vh'>
         <Typography variant='h3' sx={{
            fontWeight: 600
         }}>
            Take a Surveys.
            <BsCheckCircleFill style={{ color: "#0d6efd", marginLeft: '1rem', marginBottom: "-10px" }} />
         </Typography>
         <Typography variant='h5' color='GrayText' fontWeight='600' mt='5px'>
            It will take 5 mounties!
         </Typography>

      </Stack>
   );
};

export default Home;