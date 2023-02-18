import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';

const Main = () => {
   return (
      <Container maxWidth="xl">
         <Header />
         <Outlet />
      </Container>
   );
};

export default Main;