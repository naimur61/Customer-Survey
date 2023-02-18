import { Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Question = ({ q, i, questions }) => {

   return (
      <Box
         sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
               m: 1,
               width: { xs: '15rem', md: '30rem' },
               height: '7rem',

            },
            wordWrap: 'break-word'
         }}
      >

         <Paper elevation={3} sx={{
            p: '3rem',
            borderRadius: '1rem',

         }}>
            <Typography variant='h5' fontWeight='600' textAlign='center' mt='-1.5rem' mb='1rem'> Customer Survey</Typography>
            <Typography variant='h6' sx={{
               display: 'flex',
               justifyContent: 'end',
               mb: '2rem'
            }} >{i + 1}/{questions?.length} </Typography>
            <Stack direction='row' spacing={3}>
               <Typography>
                  {i + 1}.
               </Typography>
               <Typography>
                  {q?.question}
               </Typography>
            </Stack>

         </Paper>
      </Box>

   );
};

export default Question;