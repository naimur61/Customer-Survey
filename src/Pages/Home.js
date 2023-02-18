import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';


const Home = () => {
   const navigate = useNavigate();
   return (
      <Stack direction='column' justifyContent='center' alignItems='center' height='80vh'>
         <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' alignItems='center' spacing={2}>
            <Typography variant='h3' sx={{
               fontWeight: { xs: 500, md: 600 }
            }}>
               Take a Surveys
            </Typography>
            <Typography variant='h4'>
               <BsCheckCircleFill style={{ color: "#0d6efd", }} />
            </Typography>
         </Stack>

         <Typography variant='h6' color='GrayText' fontWeight='600' mt='1rem' mb='7rem'>
            It will take 5 mounties!
         </Typography>
         <Button variant="contained" endIcon={<EastIcon />} onClick={() => navigate('/surveys')}>
            Start
         </Button>
      </Stack>
   );
};

export default Home;