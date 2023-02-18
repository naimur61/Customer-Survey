import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Surveys from '../Pages/Surveys';


export const Routes = createBrowserRouter([
   {
      path: '/', element: <Main />, children: [
         { path: '/', element: <Home /> },
         { path: '/surveys', element: <Surveys /> }
      ]
   }
])