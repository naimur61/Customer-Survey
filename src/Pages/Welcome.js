import React, { useEffect } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Welcome = () => {
   const { width, height } = useWindowSize()

   const navigate = useNavigate();

   useEffect(() => {
      const timer = setTimeout(() => {
         navigate('/');
      }, 5000);

      return () => clearTimeout(timer);
   }, [navigate]);

   return (
      <div>
         <Confetti
            width={width}
            height={height}
         />
         <Stack justifyContent='center' alignItems='center' height='80vh'>
            <Stack direction={{ xs: 'column-reverse', md: 'row' }} justifyContent='center' alignItems='center'>
               <Typography fontFamily="'Great Vibes', cursive;" fontWeight={700} variant='h2'>Congratulation </Typography>
               <Typography variant='h2'>🎉 </Typography>
            </Stack>
            <Typography color='#0d6efd' fontWeight={600} mt="1rem">You completed this survey with your valuable time.</Typography>
         </Stack>
      </div>
   );
};

export default Welcome;