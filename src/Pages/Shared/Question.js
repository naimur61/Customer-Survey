import { Button, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';
import Rating from '@mui/material/Rating';
import HelpIcon from '@mui/icons-material/Help';
import axios from 'axios';


const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 300,
   bgcolor: 'white',
   boxShadow: 24,
   px: 4,
   pb: 4,
   borderRadius: '.5rem'
};

const Question = ({ total, ques, setPage, page, name }) => {

   const [value, setValue] = React.useState(2);
   const navigate = useNavigate();
   const [survey, setSurvey] = useState([]);
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [text, setText] = useState('')


   const type = ques?.type;
   const question = ques?.question;

   const setAnswer = () => {
      const ans = (ques?.type === 'Rating') ? value : text;
      const newObj = [...survey, { type, q_Id: ques?._id, question, ans }]
      setSurvey(newObj)
      return newObj;
   }


   const nextQ = () => {
      setAnswer();
      setPage(page + 1);
   }

   const confirm = () => {
      const surveys = setAnswer();
      const newServery = { flag: "COMPLETED", name, surveys };
      const string = JSON.stringify(newServery)
      localStorage.setItem('surveyDetails', string)

      axios.post('https://survey-server-one.vercel.app/survey', newServery)
         .then(response => {
            if (response.data.acknowledged === true) {
               handleClose();
               navigate('/welcome')
            }
         })
         .catch(error => {
            console.log(error);
         });
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
               {
                  (ques?.type === 'Rating') ?

                     <Box ml='2.4rem'>
                        <Rating
                           name="simple-controlled"
                           value={value}
                           onChange={(event, newValue) => {
                              setValue(newValue);
                           }}
                        />
                     </Box>
                     :
                     <TextField id="name-input" placeholder='Name' variant="standard" fullWidth name='names' onChange={(e) => {
                        setText(e.target.value)
                     }} />
               }

               {/* Buttons  */}
               <Stack direction='row' spacing={3} mt='2.5rem' justifyContent='space-between'>
                  {page > 0 && <Button variant="contained" startIcon={<WestIcon />} onClick={() => setPage(page - 1)}>  Previous</Button>}

                  {page < total - 1 && <Button variant="contained" endIcon={<EastIcon />} onClick={nextQ}>Next</Button>}

                  {page === total - 1 && <Button variant="contained" onClick={handleOpen}> Submit</Button>}
               </Stack>

            </Paper>
         </Box>


         {/* Modal  */}
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ backgroundColor: '#093f8e80' }}
         >
            <Box sx={style}>
               <Stack direction='row' spacing={1} alignItems="center" sx={{ backgroundColor: '#0d6efd', p: '1rem', color: 'white', mx: '-2rem', borderTopLeftRadius: '.5rem', borderTopRightRadius: '.5rem' }}>
                  <HelpIcon />
                  <Typography fontWeight={600}>
                     Confirm
                  </Typography>
               </Stack>


               <Typography id="modal-modal-description" sx={{ mt: '2rem' }}>
                  Submit your survey ?
               </Typography>

               <Stack justifyContent='end' alignItems='end' mt='2rem'><Button variant="contained" onClick={confirm}> Confirm</Button></Stack>
            </Box>
         </Modal>
      </>
   );
};

export default Question;