import { Stack } from '@mui/material';
import React from 'react';
import Question from './Shared/Question';

const Surveys = () => {
   return (
      <Stack direction='column' justifyContent='center' alignItems='center' height='80vh'>
         {
            questions.map((q, i) => <Question key={i} q={q} i={i} questions={questions} />)
         }

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
