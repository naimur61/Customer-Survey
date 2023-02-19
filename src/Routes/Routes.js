import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Surveys from '../Pages/Surveys';
import Welcome from '../Pages/Welcome';


export const Routes = createBrowserRouter([
   {
      path: '/', element: <Main />, children: [
         { path: '/', element: <Home /> },
         { path: '/surveys', element: <Surveys /> },
         { path: '/welcome', element: <Welcome /> },
      ]
   }
])