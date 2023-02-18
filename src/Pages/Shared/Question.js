import { Button, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import { json, useNavigate } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';
import Rating from '@mui/material/Rating';



const Question = ({ total, ques, setPage, page }) => {

   const [value, setValue] = React.useState(2);
   const navigate = useNavigate();
   const [survey, setSurvey] = useState([]);


   const type = ques?.type;
   const question = ques?.question;

   const setAnswer = () => {
      const ans = value;
      const newObj = [...survey, { type, question, ans }]
      setSurvey(newObj)
      return newObj;
   }


   const nextQ = () => {
      setAnswer();
      setPage(page + 1);
   }



   const submit = () => {
      const newSurvey = setAnswer();
      const string = JSON.stringify(newSurvey)
      localStorage.setItem('survey', string)
   }


   return (
      <>
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
               <Typography variant='h6' sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  mb: '2rem'
               }} >{page + 1}/{total} </Typography>


               <Stack direction='row' spacing={3} mb='.9rem'>
                  <Typography>
                     {page + 1}.
                  </Typography>
                  <Typography>
                     {ques?.question}
                  </Typography>
               </Stack>

               {/* Ratting  */}
               <Box ml='2.4rem'>
                  <Rating
                     name="simple-controlled"
                     value={value}
                     onChange={(event, newValue) => {
                        setValue(newValue);
                     }}
                  />
                  {value}
               </Box>

               {/* Buttons  */}
               <Stack direction='row' spacing={3} mt='2.5rem' justifyContent='space-between'>
                  {page > 0 && <Button variant="contained" startIcon={<WestIcon />} onClick={() => setPage(page - 1)}>  Previous</Button>}

                  {page < total - 1 && <Button variant="contained" endIcon={<EastIcon />} onClick={nextQ}>Next</Button>}

                  {page === total - 1 && <Button variant="contained" onClick={submit}> Submit</Button>}
               </Stack>

            </Paper>
         </Box>
      </>
   );
};

export default Question;