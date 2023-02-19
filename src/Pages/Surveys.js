import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Question from './Shared/Question';
import EastIcon from '@mui/icons-material/East';
import axios from 'axios';


const Surveys = () => {
   const [page, setPage] = useState(0);
   const [status, setStatus] = useState(false);
   const [name, setName] = useState({});
   const [questions, setQuestions] = useState();

   const submitName = () => {
      const nameInput = document.getElementById('name-input');
      const name = nameInput.value;
      setName(name)
      setStatus(true)
   }

   axios.get('https://survey-server-one.vercel.app/question')
      .then(response => {
         setQuestions(response.data);
      })
      .catch(error => {
         console.log(error);
      });


   return (

      <Stack direction='column' justifyContent='center' alignItems='center' height='80vh'>
         {!status ?
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
                  <Typography variant='h5' fontWeight='600' textAlign='center' mt='-1.5rem' mb='5rem'> Customer Survey</Typography>

                  <label>Enter your Name</label>
                  <TextField id="name-input" placeholder='Name' variant="standard" fullWidth name='names' />
                  <Button variant="contained" endIcon={<EastIcon />} onClick={() => submitName()} sx={{ mt: "3rem", float: 'right' }}>Next</Button>
               </Paper>
            </Box>
            :
            <Question total={questions?.length} setPage={setPage} ques={questions[page]} page={page} name={name} />

         }
      </Stack>
   );
};

export default Surveys;


// const questions = [
//    {
//       "type": "Rating",
//       "question": "How satisfied are you with our products? "
//    },
//    {
//       "type": "Rating",
//       "question": "How fair are the prices compared to similar retailers?"
//    },
//    {
//       "type": "Rating",
//       "question": "How satisfied are you with the value for money of your purchase?"
//    },
//    {
//       "type": "Rating",
//       "question": "On a scale of 1-10 how would you recommend us to your friends and family?"
//    },
//    {
//       "type": "Text",
//       "question": "What could we do to improve our service?"
//    },
// ]
