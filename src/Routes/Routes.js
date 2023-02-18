import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';


export const Routes = createBrowserRouter([
   {
      path: '/', element: <Main />, children: [
         { path: '/', element: <Home /> }
      ]
   }
])