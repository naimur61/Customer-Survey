import { Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Question from './Shared/Question';

const Surveys = () => {
   const [page, setPage] = useState(0);



   return (

      <Stack direction='column' justifyContent='center' alignItems='center' height='80vh'>


         <Box
            sx={{
               display: 'flex',
               flexWrap: 'wrap',
               '& > :not(style)': {
                  m: 1,
                  width: { xs: '15rem', md: '30rem' },
                  height: '15rem',

               },
               wordWrap: 'break-word'
            }}
         >

            <Paper elevation={3} sx={{
               p: '3rem',
               borderRadius: '1rem',

            }}>

               <Typography variant='h5' fontWeight='600' textAlign='center' mt='-1.5rem' mb='1rem'> Customer Survey</Typography>
               <TextField id="standard-basic" placeholder='Name' variant="standard" sx={{ mx: 'auto' }} />

            </Paper>
         </Box>

         {/* <Question total={questions?.length} setPage={setPage} ques={questions[page]} page={page} /> */}
      </Stack>
   );
};

export default Surveys;


const questions = [
   {
      "type": "Rating",
      "question": "How satisfied are you with our products? "
   },
   {
      "type": "Rating",
      "question": "How fair are the prices compared to similar retailers?"
   },
   {
      "type": "Rating",
      "question": "How satisfied are you with the value for money of your purchase?"
   },
   {
      "type": "Rating",
      "question": "On a scale of 1-10 how would you recommend us to your friends and family?"
   },
   {
      "type": "Text",
      "question": "What could we do to improve our service?"
   },
]
